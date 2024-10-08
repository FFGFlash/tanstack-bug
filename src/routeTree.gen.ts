/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ParamRouteImport } from './routes/param/route'
import { Route as LazyparamRouteImport } from './routes/lazy_param/route'
import { Route as ParamAnyImport } from './routes/param/$any'
import { Route as notbrokenrouteGroupparamRouteImport } from './routes/(not_broken_route)/group_param/route'
import { Route as brokenrouteGrouplazyparamRouteImport } from './routes/(broken_route)/group_lazy_param/route'
import { Route as notbrokenrouteGroupparamAnyImport } from './routes/(not_broken_route)/group_param/$any'

// Create Virtual Routes

const LazyparamAnyLazyImport = createFileRoute('/lazy_param/$any')()
const brokenrouteGrouplazyparamAnyLazyImport = createFileRoute(
  '/(broken_route)/group_lazy_param/$any',
)()

// Create/Update Routes

const ParamRouteRoute = ParamRouteImport.update({
  path: '/param',
  getParentRoute: () => rootRoute,
} as any)

const LazyparamRouteRoute = LazyparamRouteImport.update({
  path: '/lazy_param',
  getParentRoute: () => rootRoute,
} as any)

const LazyparamAnyLazyRoute = LazyparamAnyLazyImport.update({
  path: '/$any',
  getParentRoute: () => LazyparamRouteRoute,
} as any).lazy(() =>
  import('./routes/lazy_param/$any.lazy').then((d) => d.Route),
)

const ParamAnyRoute = ParamAnyImport.update({
  path: '/$any',
  getParentRoute: () => ParamRouteRoute,
} as any)

const notbrokenrouteGroupparamRouteRoute =
  notbrokenrouteGroupparamRouteImport.update({
    path: '/group_param',
    getParentRoute: () => rootRoute,
  } as any)

const brokenrouteGrouplazyparamRouteRoute =
  brokenrouteGrouplazyparamRouteImport.update({
    path: '/group_lazy_param',
    getParentRoute: () => rootRoute,
  } as any)

const brokenrouteGrouplazyparamAnyLazyRoute =
  brokenrouteGrouplazyparamAnyLazyImport
    .update({
      path: '/$any',
      getParentRoute: () => brokenrouteGrouplazyparamRouteRoute,
    } as any)
    .lazy(() =>
      import('./routes/(broken_route)/group_lazy_param/$any.lazy').then(
        (d) => d.Route,
      ),
    )

const notbrokenrouteGroupparamAnyRoute =
  notbrokenrouteGroupparamAnyImport.update({
    path: '/$any',
    getParentRoute: () => notbrokenrouteGroupparamRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/lazy_param': {
      id: '/lazy_param'
      path: '/lazy_param'
      fullPath: '/lazy_param'
      preLoaderRoute: typeof LazyparamRouteImport
      parentRoute: typeof rootRoute
    }
    '/param': {
      id: '/param'
      path: '/param'
      fullPath: '/param'
      preLoaderRoute: typeof ParamRouteImport
      parentRoute: typeof rootRoute
    }
    '/(broken_route)/group_lazy_param': {
      id: '/group_lazy_param'
      path: '/group_lazy_param'
      fullPath: '/group_lazy_param'
      preLoaderRoute: typeof brokenrouteGrouplazyparamRouteImport
      parentRoute: typeof rootRoute
    }
    '/(not_broken_route)/group_param': {
      id: '/group_param'
      path: '/group_param'
      fullPath: '/group_param'
      preLoaderRoute: typeof notbrokenrouteGroupparamRouteImport
      parentRoute: typeof rootRoute
    }
    '/param/$any': {
      id: '/param/$any'
      path: '/$any'
      fullPath: '/param/$any'
      preLoaderRoute: typeof ParamAnyImport
      parentRoute: typeof ParamRouteImport
    }
    '/lazy_param/$any': {
      id: '/lazy_param/$any'
      path: '/$any'
      fullPath: '/lazy_param/$any'
      preLoaderRoute: typeof LazyparamAnyLazyImport
      parentRoute: typeof LazyparamRouteImport
    }
    '/(not_broken_route)/group_param/$any': {
      id: '/group_param/$any'
      path: '/$any'
      fullPath: '/group_param/$any'
      preLoaderRoute: typeof notbrokenrouteGroupparamAnyImport
      parentRoute: typeof notbrokenrouteGroupparamRouteImport
    }
    '/(broken_route)/group_lazy_param/$any': {
      id: '/group_lazy_param/$any'
      path: '/$any'
      fullPath: '/group_lazy_param/$any'
      preLoaderRoute: typeof brokenrouteGrouplazyparamAnyLazyImport
      parentRoute: typeof brokenrouteGrouplazyparamRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LazyparamRouteRoute: LazyparamRouteRoute.addChildren({
    LazyparamAnyLazyRoute,
  }),
  ParamRouteRoute: ParamRouteRoute.addChildren({ ParamAnyRoute }),
  brokenrouteGrouplazyparamRouteRoute:
    brokenrouteGrouplazyparamRouteRoute.addChildren({
      brokenrouteGrouplazyparamAnyLazyRoute,
    }),
  notbrokenrouteGroupparamRouteRoute:
    notbrokenrouteGroupparamRouteRoute.addChildren({
      notbrokenrouteGroupparamAnyRoute,
    }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/lazy_param",
        "/param",
        "/group_lazy_param",
        "/group_param"
      ]
    },
    "/lazy_param": {
      "filePath": "lazy_param/route.tsx",
      "children": [
        "/lazy_param/$any"
      ]
    },
    "/param": {
      "filePath": "param/route.tsx",
      "children": [
        "/param/$any"
      ]
    },
    "/group_lazy_param": {
      "filePath": "(broken_route)/group_lazy_param/route.tsx",
      "children": [
        "/group_lazy_param/$any"
      ]
    },
    "/group_param": {
      "filePath": "(not_broken_route)/group_param/route.tsx",
      "children": [
        "/group_param/$any"
      ]
    },
    "/param/$any": {
      "filePath": "param/$any.tsx",
      "parent": "/param"
    },
    "/lazy_param/$any": {
      "filePath": "lazy_param/$any.lazy.tsx",
      "parent": "/lazy_param"
    },
    "/group_param/$any": {
      "filePath": "(not_broken_route)/group_param/$any.tsx",
      "parent": "/group_param"
    },
    "/group_lazy_param/$any": {
      "filePath": "(broken_route)/group_lazy_param/$any.lazy.tsx",
      "parent": "/group_lazy_param"
    }
  }
}
ROUTE_MANIFEST_END */
