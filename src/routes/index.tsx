import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Onboarding } from "./Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <div>Page</div> }],
  },
  { path: "/onboarding", element: <Onboarding /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
