import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "zohaib-hassan-vr",
    project: "javascript-react",
    url: "https://sentry.io/"
  })],

  assetsInclude: ['**/*.glb'],

  build: {
    sourcemap: true
  }
})