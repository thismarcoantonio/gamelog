import { Navigate, Outlet } from "react-router-dom";
import { MobileNavigation } from "../../components/MobileNavigation";
import { Icon } from "../../components/Icon";
import styles from "./styles.module.css";
import { useData } from "../../hooks/useData";

export function App() {
  const data = useData();

  if (!data.username) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>GameLog</h1>
        <Icon icon="filter"></Icon>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <MobileNavigation />
    </div>
  );
}
