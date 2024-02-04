import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { MobileNavigation } from "../components/MobileNavigation";

export function App() {
  const loaderData = useLoaderData() as { username: string };

  if (!loaderData.username) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <div>
      <header>
        <h1>GameLog</h1>
      </header>
      <Outlet />
      <MobileNavigation />
    </div>
  );
}
