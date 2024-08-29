import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/group_param/$any" params={{ any: 'test' }}>
          Group w/ Param
        </Link>
        <Link to="/group_lazy_param/$any" params={{ any: 'test' }}>
          Group w/ Lazy Param
        </Link>
        <Link to="/param/$any" params={{ any: 'test' }}>
          Param
        </Link>
        <Link to="/lazy_param/$any" params={{ any: 'test' }}>
          Lazy Param
        </Link>
      </div>
      <Outlet />
    </React.Fragment>
  ),
})
