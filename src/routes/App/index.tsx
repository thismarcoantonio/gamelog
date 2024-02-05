import { useEffect, useCallback } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MobileNavigation } from "../../components/MobileNavigation";
import { Icon } from "../../components/Icon";
import styles from "./styles.module.css";
import { useData } from "../../hooks/useData";
import { getPlayingResults } from "../../data";

export function App() {
  const { updatePlayingResults, username } = useData();

  const fetchPlayingResults = useCallback(async () => {
    const playingResults = await getPlayingResults(1);
    updatePlayingResults(playingResults);
  }, [updatePlayingResults]);

  useEffect(() => {
    if (username) {
      fetchPlayingResults();
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
