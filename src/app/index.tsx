export const Route = createFileRoute({
  component: Page,
  loader: async () => {
    const res = await fetch("https://api.vercel.app/blog")
    return await res.json()
  },
})

function Page() {
  const posts = Route.useLoaderData()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
