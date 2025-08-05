import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@tailwindConfig": path.resolve(__dirname, "./tailwind.config.js"),
      "@src": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./public/assets"),
      "@collections": path.resolve(__dirname, "./src/collections"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@hocs": path.resolve(__dirname, "./src/hocs"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts/containers"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@validations": path.resolve(__dirname, "./src/validations"),
      "@themes": path.resolve(__dirname, "./src/theme"),
      "@layoutsComponents": path.resolve(__dirname, "./src/layouts/components"),
      "@authComponents": path.resolve(
        __dirname,
        "./src/modules/Authentication/components"
      ),

      "@feedComponents": path.resolve(__dirname, "src/modules/Feed/components"),
      "@searchComponents": path.resolve(
        __dirname,
        "src/modules/Search/components"
      ),
      "@liveMeetingsComponents": path.resolve(
        __dirname,
        "src/modules/LiveMeetings/components"
      ),
      "@landingComponents": path.resolve(
        __dirname,
        "./src/modules/Landing/components"
      ),
      "@onboardingComponents": path.resolve(
        __dirname,
        "./src/modules/Onboarding/components"
      ),
      "@settingsComponents": path.resolve(
        __dirname,
        "./src/modules/Settings/components"
      ),
      "@profileComponents": path.resolve(
        __dirname,
        "./src/modules/Profile/components"
      ),
      "@forumComponents": path.resolve(
        __dirname,
        "./src/modules/Forum/components"
      ),
      "@contentHubComponents": path.resolve(
        __dirname,
        "./src/modules/ContentHub/components"
      ),
      "@progressComponents": path.resolve(
        __dirname,
        "./src/modules/Progress/components"
      ),
      "@startLiveMeetingsComponents": path.resolve(
        __dirname,
        "./src/modules/StartLiveMeetings/components"
      ),
      "@watchRecordedContentComponents": path.resolve(
        __dirname,
        "./src/modules/WatchRecordedContent/components"
      ),
      "@watchUploadedContentComponents": path.resolve(
        __dirname,
        "./src/modules/WatchUploadedContent/components"
      ),
      "@messagesComponents": path.resolve(
        __dirname,
        "./src/modules/Messages/components"
      ),
    },
  },
});
