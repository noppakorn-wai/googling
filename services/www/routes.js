export const pages = {
  login: {
    name: 'login',
    pattern: /\/login/,
    page: '/login',
  },
  searchList: {
    name: 'searchList',
    pattern: /\/searches/,
    page: '/searchList',
    meta: {
      requireAuth: true,
    },
  },
  searchDetail: {
    name: 'searchDetail',
    pattern: /\/searches\/(0-9)+/,
    page: '/searchDetail',
    meta: {
      requireAuth: true,
    },
  },
}

export const routes = [pages.login, pages.searchList, pages.searchDetail]

export const matchRoute = (nameOrPath) => {
  if (!nameOrPath || typeof nameOrPath !== 'string') return undefined
  return routes.find(({ pattern }, index) => {
    const route = routes[index]
    return route.name === nameOrPath || nameOrPath.match(pattern)
  })
}
