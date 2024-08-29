import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/lazy_param')({
  component: () => <Outlet />,
})
