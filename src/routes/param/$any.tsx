import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/param/$any')({
  component: RouteComponent,
})

function RouteComponent() {
  const { any } = Route.useParams()
  return <div>{any}</div>
}
