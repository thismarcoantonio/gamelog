// import { getPlayingResults } from "../data";
import { useState, createContext } from "react";
import { storage } from "../../utils/storage";

interface Props {
  children: React.ReactNode;
}

export interface Context {
  username: string | null;
  updateUsername: (username: string) => void;
}

const noop = () => null;

export const DataContext = createContext<Context>({
  username: null,
  updateUsername: noop,
});

const preferences = storage.getItem(storage.Keys.PREFERENCES);

export function DataProvider({ children }: Props) {
  const [username, setUsername] = useState<string | null>(preferences.username ?? null);

  function updateUsername(username: string) {
    setUsername(username);
    storage.setItem(storage.Keys.PREFERENCES, { username });
  }

  return <DataContext.Provider value={{ username, updateUsername }}>{children}</DataContext.Provider>;
}
