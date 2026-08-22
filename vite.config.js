import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from a sub-path:
// https://<username>.github.io/<repo-name>/
//
// Set `base` to that sub-path so built asset URLs resolve correctly.
// If you're deploying to a *user/org* page (a repo literally named
// <username>.github.io), set base back to "/".
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
});
