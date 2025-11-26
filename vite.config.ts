import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const apiRoot = env.API_ROOT;
  const useMockData = env.USE_MOCK_DATA;
  const recaptchaKey = env.RECAPTCHA_API_KEY;

  return {
    plugins: [react()],
    define: {
      "process.env.API_ROOT": apiRoot ? JSON.stringify(apiRoot) : "undefined",
      "process.env.USE_MOCK_DATA": useMockData
        ? JSON.stringify(useMockData)
        : "undefined",
      "process.env.RECAPTCHA_API_KEY": recaptchaKey
        ? JSON.stringify(recaptchaKey)
        : "undefined",
    },
    build: {
      outDir: "dist",
      assetsDir: "",
      rollupOptions: {
        output: {
          entryFileNames: "main.js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
      },
    },
  };
});
