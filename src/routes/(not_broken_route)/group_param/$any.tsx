import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(not_broken_route)/group_param/$any')({
  component: RouteComponent,
})

function RouteComponent() {
  const { any } = Route.useParams()
  return <div>{any}</div>
}
