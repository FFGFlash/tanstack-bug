import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(not_broken_route)/working')({
  component: () => <Outlet />,
})
