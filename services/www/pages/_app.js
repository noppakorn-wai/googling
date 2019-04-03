import React from 'react'
import App, { Container } from 'next/app'
import { Provider as AuthProvider } from 'www/contexts/AuthContext'

import 'antd/lib/style/index.less'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Container>
    )
  }
}

export default MyApp
