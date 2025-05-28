import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      tsr: {
        // This is the directory where TanStack Router will look for your routes.
        routesDirectory: "src/app",
      },
    }),
  ],
})
