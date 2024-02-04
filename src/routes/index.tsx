import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { GameLog } from "./GameLog";
import { Onboarding } from "./Onboarding";
import { storage } from "../utils/storage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return storage.getItem();
    },
    children: [{ path: "/", element: <GameLog /> }],
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
    loader: () => {
      return storage.getItem();
    },
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
