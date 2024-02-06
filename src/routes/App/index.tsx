import { useEffect, useCallback } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MobileNavigation } from "../../components/MobileNavigation";
import { Icon } from "../../components/Icon";
import { getGameResults } from "../../data";
import { useData } from "../../hooks/useData";
import styles from "./styles.module.css";

export function App() {
  const { updatePlayingResults, updateCompletedResults, username } = useData();

  const fetchPlayingResults = useCallback(async () => {
    const playingResults = await getGameResults({ size: 10, type: "playing", username: username! });
    updatePlayingResults(playingResults);
  }, [updatePlayingResults, username]);

  const fetchCompletedResults = useCallback(async () => {
    const completedResults = await getGameResults({ size: 50, type: "completed", username: username! });
    updateCompletedResults(completedResults);
  }, [updateCompletedResults, username]);

  useEffect(() => {
    if (username) {
      fetchPlayingResults();
      fetchCompletedResults();
    }
  }, []);

  if (!username) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>GameLog</h1>
        <Icon icon="filter" />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <MobileNavigation />
    </div>
  );
}
