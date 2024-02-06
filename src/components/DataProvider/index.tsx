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
  loading: boolean;
  setPlayingLoading: () => void;
  setCompletedLoading: () => void;
}

const noop = () => null;

export const DataContext = createContext<Context>({
  username: null,
  updateUsername: noop,
  playingResults: null,
  updatePlayingResults: noop,
  completedResults: null,
  updateCompletedResults: noop,
  loading: false,
  setPlayingLoading: noop,
  setCompletedLoading: noop,
});

const preferences = storage.getItem(storage.Keys.PREFERENCES);

export function DataProvider({ children }: Props) {
  const [username, setUsername] = useState<string | null>(preferences.username ?? null);
  const [playingResults, setPlayingResults] = useState<PaginatedResults | null>(null);
  const [completedResults, setCompletedResults] = useState<PaginatedResults | null>(null);
  const [loading, setLoading] = useState({ playing: false, completed: false });

  function updateUsername(username: string) {
    setUsername(username);
    storage.setItem(storage.Keys.PREFERENCES, { username });
  }

  function updatePlayingResults(value: PaginatedResults) {
    setPlayingResults(value);
    setLoading((loading) => ({ playing: false, completed: loading.completed }));
  }

  function setPlayingLoading() {
    setLoading((loading) => ({ playing: true, completed: loading.completed }));
  }

  function updateCompletedResults(value: PaginatedResults) {
    setCompletedResults(value);
    setLoading((loading) => ({ completed: false, playing: loading.playing }));
  }

  function setCompletedLoading() {
    setLoading((loading) => ({ completed: true, playing: loading.playing }));
  }

  return (
    <DataContext.Provider
      value={{
        username,
        updateUsername,
        playingResults,
        updatePlayingResults,
        completedResults,
        updateCompletedResults,
        loading: loading.playing || loading.completed,
        setPlayingLoading,
        setCompletedLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
