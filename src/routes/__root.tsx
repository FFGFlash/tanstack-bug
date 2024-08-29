import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/working/$any" params={{ any: 'yay' }}>
          Working
        </Link>
        <Link to="/broken/$any" params={{ any: 'yay' }}>
          Broken
        </Link>
      </div>
      <Outlet />
    </React.Fragment>
  ),
})
