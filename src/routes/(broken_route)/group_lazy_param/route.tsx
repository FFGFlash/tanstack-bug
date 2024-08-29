import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(broken_route)/group_lazy_param')({
  component: () => <Outlet />,
})
