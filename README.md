---
id: migrate-from-next-js-app-router
title: Migrate from Next.js App Router
---

# Migrate from Next.js App Router to TanStack Start

This guide will help you migrate your Next.js App Router application to TanStack Start.

## Uninstall Next.js

Uninstall Next.js and remove its configuration files.

```shell
npm uninstall next && rm next.config.*
```

## Install Dependencies

TanStack Start is powered by [Vite](https://vite.dev) and [TanStack Router](https://tanstack.com/router) and requires them as dependencies.

To install them, run:

```shell
npm i @tanstack/react-start @tanstack/react-router vite && npm i -D vite-tsconfig-paths
```

## Create and Update Configuration Files

We'll then update our `package.json` to use Vite's CLI and set `"type": "module"`:

```json
// package.json
{
  // ...
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build"
  }
}
```

Then configure TanStack Start's Vite plugin in `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
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
> By default, TanStack Start uses the `src/routes` directory to store your routes. If you want to use a different directory, you can specify it in the `tanstackStart` plugin options as shown above.
