import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(broken_route)/broken')({
  component: () => <Outlet />,
})
