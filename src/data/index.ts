import axios from "axios";
import { storage } from "../utils/storage";

const api = axios.create({
  baseURL: "https://rawg.io/api",
  headers: {
    token: `Token ${import.meta.env.VITE_RAWG_TOKEN}`,
  },
});

export interface Result {
  id: number;
  name: string;
  released: string;
  playing: number;
  completed: number;
  platforms: string[];
  rating: number;
  image: string;
  user: {
    added: string;
    platform?: string;
    rating?: number;
  };
}

export interface PaginatedResults {
  count: number;
  results: Result[];
}

interface ResultResponse {
  id: number;
  name: string;
  released: string;
  added_by_status: {
    playing: number;
    beaten: number;
  };
  user_game: {
    added: string;
    platforms: Array<{
      slug: string;
    }>;
  };
  user_review?: {
    rating: number;
  };
  platforms: Array<{
    platform: {
      slug: string;
    };
  }>;
  metacritic: number;
  background_image: string;
}

interface PaginatedResponse {
  count: number;
  next?: string;
  results: ResultResponse[];
}

export async function getGameResults({
  page = 1,
  size = 50,
  type,
  previousResults,
  username,
}: {
  page?: number;
  size?: number;
  type: "playing" | "completed";
  previousResults?: Result[];
  username: string;
}) {
  const isCompleted = type === "completed";
  const storageKey = isCompleted ? storage.Keys.COMPLETED_RESULTS : storage.Keys.PLAYING_RESULTS;

  const previousGameResults = storage.getItem(storageKey);
  if (previousGameResults.count >= 0) return previousGameResults;

  const { data } = await api.get<PaginatedResponse>(`/users/${username}/games`, {
    params: {
      ordering: "-created",
      statuses: isCompleted ? "beaten" : "playing",
      page_size: size,
      page,
      key: import.meta.env.VITE_RAWG_API,
    },
  });

  const results: Result[] = [
    ...(previousResults || []),
    ...data.results.map((result) => ({
      id: result.id,
      name: result.name,
      released: result.released,
      playing: result.added_by_status.playing,
      completed: result.added_by_status.beaten,
      rating: result.metacritic,
      image: result.background_image,
      platforms: result.platforms.map(({ platform }) => platform.slug),
      user: {
        added: result.user_game.added,
        platform: result.user_game.platforms?.[0]?.slug,
        rating: result.user_review?.rating,
      },
    })),
  ];

  if (data.next) {
    return getGameResults({
      page: page + 1,
      size,
      type,
      username,
      previousResults: results,
    });
  }

  const result = { count: data.count, results };
  storage.setItem(storageKey, result);

  return result;
}
