import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(broken_route)/group_lazy_param/$any')({
  component: RouteComponent,
})

function RouteComponent() {
  const { any } = Route.useParams()
  return <div>{any}</div>
}
