import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
