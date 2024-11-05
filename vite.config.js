import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      ignored: ["C:/DumpStack.log.tmp"],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendors': ['react', 'react-dom'],
          'all-stars': ['../src/pages/AllStars.jsx'],
          'highlights-video': ['../src/components/HighlightsVideo.jsx'],
          'membership-page': ['../../src/pages/additionalPages/MembershipInfoPage.jsx']
        },
      },
    },
  },
});
