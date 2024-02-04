import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.gamelog.app",
  appName: "gamelog",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
