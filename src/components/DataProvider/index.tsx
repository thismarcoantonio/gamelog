// import { getPlayingResults } from "../data";
import { useState, createContext } from "react";
import { storage } from "../../utils/storage";
import { PaginatedResults } from "../../data";

interface Props {
  children: React.ReactNode;
}

export interface Context {
  username: string | null;
  updateUsername: (username: string) => void;
  playingResults: PaginatedResults | null;
  updatePlayingResults: (value: PaginatedResults) => void;
  completedResults: PaginatedResults | null;
  updateCompletedResults: (value: PaginatedResults) => void;
}

const noop = () => null;

export const DataContext = createContext<Context>({
  username: null,
  updateUsername: noop,
  playingResults: null,
  updatePlayingResults: noop,
  completedResults: null,
  updateCompletedResults: noop,
});

const preferences = storage.getItem(storage.Keys.PREFERENCES);

export function DataProvider({ children }: Props) {
  const [username, setUsername] = useState<string | null>(preferences.username ?? null);
  const [playingResults, setPlayingResults] = useState<PaginatedResults | null>(null);
  const [completedResults, setCompletedResults] = useState<PaginatedResults | null>(null);

  function updateUsername(username: string) {
    setUsername(username);
    storage.setItem(storage.Keys.PREFERENCES, { username });
  }

  function updatePlayingResults(value: PaginatedResults) {
    setPlayingResults(value);
  }

  function updateCompletedResults(value: PaginatedResults) {
    setCompletedResults(value);
  }

  return <DataContext.Provider value={{ username, updateUsername, playingResults, updatePlayingResults, completedResults, updateCompletedResults }}>{children}</DataContext.Provider>;
}
