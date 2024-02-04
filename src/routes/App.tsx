import { Navigate, Outlet } from "react-router-dom";

export function App() {
  const hasProfileUsername = true;

  if (!hasProfileUsername) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
