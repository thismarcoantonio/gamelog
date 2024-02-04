import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./routes";
import { StatusBar } from "@capacitor/status-bar";
import { NavigationBar } from "@hugotomazi/capacitor-navigation-bar";
import "./global.css";

StatusBar.setOverlaysWebView({ overlay: true });
NavigationBar.setColor({ color: "#151515" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
