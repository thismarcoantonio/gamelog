import ReactDOM from "react-dom/client";
import { StatusBar } from "@capacitor/status-bar";
import { NavigationBar } from "@hugotomazi/capacitor-navigation-bar";
import { Router } from "./routes";
import { DataProvider } from "./components/DataProvider";
import "./global.css";

StatusBar.setOverlaysWebView({ overlay: true });
NavigationBar.setColor({ color: "#151515" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <Router />
  </DataProvider>
);
