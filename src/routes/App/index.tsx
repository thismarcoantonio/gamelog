import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { MobileNavigation } from "../../components/MobileNavigation";
import { Icon } from "../../components/Icon";
import styles from "./styles.module.css";

export function App() {
  const loaderData = useLoaderData() as { username: string };

  if (!loaderData.username) {
    return <Navigate to="/onboarding" />;
  }

  console.log(styles);

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>GameLog</h1>
        <Icon icon="filter"></Icon>
      </header>
      <main>
        <Outlet />
      </main>
      <MobileNavigation />
    </div>
  );
}
