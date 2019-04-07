import React from 'react'
import App, { Container } from 'next/app'
import { Provider as AuthProvider } from 'www/contexts/AuthContext'
import { Icon, Spin } from 'www/components/antd'

import 'antd/lib/style/index.less'

Spin.setDefaultIndicator(<Icon type="loading" spin />)

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
