import axios from "axios";
import { storage } from "../utils/storage";

const api = axios.create({
  baseURL: "https://rawg.io/api",
});

export interface Result {
  id: number;
  name: string;
  released: string;
  playing: number;
  rating: number;
  image: string;
}

export interface PaginatedResults {
  page: number;
  count: number;
  hasNextPage: boolean;
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
  metacritic: number;
  background_image: string;
}

interface PaginatedResponse {
  count: number;
  next?: string;
  results: ResultResponse[];
}

export async function getPlayingResults(page: number): Promise<PaginatedResults> {
  const previousResults = storage.getItem(storage.Keys.PLAYING_RESULTS);
  if (previousResults.page >= page) {
    return previousResults;
  }

  const { data } = await api.get<PaginatedResponse>(`/users/thismarcoantonio/games`, {
    params: {
      ordering: "-created",
      statuses: "playing",
      page_size: 10,
      page,
      key: import.meta.env.VITE_RAWG_API,
    },
  });
  const result = {
    page,
    count: data.count,
    hasNextPage: !!data.next,
    results: data.results.map((result) => ({
      id: result.id,
      name: result.name,
      released: result.released,
      playing: result.added_by_status.playing,
      rating: result.metacritic,
      image: result.background_image,
    })),
  };
  storage.setItem(storage.Keys.PLAYING_RESULTS, result);
  return result;
}

export async function getCompletedResults() {
  const { data } = await api.get(`/users/thismarcoantonio/games`, {
    params: {
      ordering: "-created",
      statuses: "beaten",
      page_size: 20,
      page: 1,
      key: import.meta.env.VITE_RAWG_API,
    },
  });
  console.log(data);
}
