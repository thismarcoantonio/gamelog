import { Navigate, Outlet, useLoaderData } from "react-router-dom";

export function App() {
  const loaderData = useLoaderData() as { username: string };

  if (!loaderData.username) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
