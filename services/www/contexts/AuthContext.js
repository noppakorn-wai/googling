import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Cookie from 'js-cookie'
import { withRouter } from 'next/router'
import { css } from '@emotion/core'
import { Spin } from 'www/components/antd'
import { pages, matchRoute } from 'www/routes'

export const AuthContext = React.createContext()

const AuthProvider = ({ children, cookie, router }) => {
  const [state, setState] = useState({
    idToken: cookie.get('idToken'),
    refreshToken: cookie.get('refreshToken'),
    email: undefined,
    loading: true,
  })
  const login = async (email, password) => {
    const {
      data: { idToken, refreshToken },
    } = await axios.post('/api/login', { email, password })
    setState({ email, idToken, refreshToken, loading: false })
  }
  const logout = () => setState({})
  const fetchProfile = async () => {
    try {
      const { data } = await axios.get('/api/profile')
      setState({ ...state, email: data.email, loading: false })
    } catch (e) {
      if (e?.response?.status === 401) logout()
    }
  }
  useEffect(() => {
    if (state.idToken) {
      cookie.set('idToken', state.idToken)
      if (!state.email) fetchProfile()
    } else {
      cookie.remove('idToken')
    }
    if (state.refreshToken) cookie.set('refreshToken', state.refreshToken)
    else cookie.remove('refreshToken')
    const route = matchRoute(router.pathname)
    const isLoginPage = route?.name === pages.login.name
    if (isLoginPage && state.idToken) router.push(pages.searchList.page, '/searches')
    else if (route?.meta?.requireAuth === true && !state.idToken) {
      router.push(pages.login.page, '/login')
    } else setState({ ...state, loading: false })
  }, [state.idToken, state.refreshToken, router.pathname])
  if (state.loading) {
    return (
      <Spin
        spinning
        size="large"
        css={css`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
      />
    )
  }
  return (
    <AuthContext.Provider
      value={{
        email: state.email,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any,
  cookie: PropTypes.shape({
    get: PropTypes.func.isRequired,
    set: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }),
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
}

AuthProvider.defaultProps = {
  cookie: {
    get: Cookie.get,
    set: Cookie.set,
    remove: Cookie.remove,
  },
}

export const Provider = withRouter(AuthProvider)
export const Consumer = AuthContext.Consumer
export const withAuthConsumer = (Compopnent) => {
  const WithAuthConsumer = (props) => (
    <AuthContext.Consumer>{(ctx) => <Compopnent {...ctx} {...props} />}</AuthContext.Consumer>
  )
  WithAuthConsumer.displayName = `withAuthConsumer(${Compopnent.displayName ||
    Compopnent.name ||
    'Component'})`
  return WithAuthConsumer
}
