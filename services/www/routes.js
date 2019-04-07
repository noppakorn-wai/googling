export const pages = {
  login: {
    name: 'login',
    pattern: /\/login/,
    page: '/login',
  },
  dashboard: {
    name: 'dashboard',
    pattern: /\/dashboard/,
    page: '/dashboard',
    meta: {
      requireAuth: true,
    },
  },
}

export const routes = [pages.login, pages.dashboard]

export const matchRoute = (nameOrPath) => {
  if (!nameOrPath || typeof nameOrPath !== 'string') return undefined
  return routes.find(({ pattern }, index) => {
    const route = routes[index]
    return route.name === nameOrPath || nameOrPath.match(pattern)
  })
}
