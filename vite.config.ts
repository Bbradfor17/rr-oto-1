import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Only expose the specific env var we actually need on the client.
  const apiRoot = env.API_ROOT;
  const useMockData = env.USE_MOCK_DATA;
  const recaptchaKey = env.RECAPTCHA_API_KEY;

  return {
    base: "/react-landing/",
    plugins: [react()],
    define: {
      // Avoid exposing all of process.env; just inline API_ROOT if present.
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
