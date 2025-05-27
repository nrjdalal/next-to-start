---
id: migrate-from-next-js-app-router
title: Migrate from Next.js App Router
---

To migrate your project from the Next.js App Router to TanStack Start, follow these steps:

1. **Remove Next.js**

   Uninstall the `next` package and delete its configuration:

   ```bash
   npm uninstall next
   rm next.config.*
   ```

2. **Install TanStack Start and Router**

   Add the necessary dependencies and Vite:

   ```bash
   npm install @tanstack/react-start@alpha @tanstack/react-router@alpha vite
   ```

3. **Configure Vite**

   Create or update `vite.config.ts` to include the `tanstackStart` plugin and point to your routes directory:

   ```ts
   import { defineConfig } from "vite"
   import { tanstackStart } from "@tanstack/react-start/plugin/vite"

   export default defineConfig({
     server: {
       port: 3000,
     },
     plugins: [
       tanstackStart({
         tsr: {
           // Use "src/app" instead of the default "src/routes"
           routesDirectory: "src/app",
         },
       }),
     ],
   })
   ```

> [!Note]
> By default, TanStack Start expects a `src/routes` directory. If your project uses `src/app` (as in Next.js), specify it with the `routesDirectory` option.

4. **Update `package.json`**

   Ensure your project is set to ES modules and update the scripts:

   ```json
   {
     "type": "module",
     "scripts": {
       "dev": "vite dev",
       "build": "vite build"
     }
   }
   ```

5. **Adjust `.gitignore`**

   Add TanStack Start output folders to prevent committing build artifacts:

   ```gitignore
   # tanstack
   .nitro
   .output
   .tanstack-start
   ```
