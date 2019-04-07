import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { withAuthConsumer } from 'www/contexts/AuthContext'
import { Layout, Menu, Typography } from 'www/components/antd'

const { Text } = Typography

const AppHeader = ({ email, logout }) => (
  <Layout.Header>
    <div
      css={css`
        float: left;
      `}
    >
      <img alt="logo" src="/static/favicon.ico" width="16" />
      <Text
        strong
        css={css`
          color: white;
        `}
      >
        &nbsp;oogling
      </Text>
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      css={css`
        line-height: 64px;
      `}
    >
      <Menu.SubMenu
        key="user"
        css={css`
          float: right;
        `}
        title={email}
      >
        <Menu.Item key="logout" onClick={logout}>
          logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </Layout.Header>
)

AppHeader.propTypes = {
  email: PropTypes.string,
  logout: PropTypes.func,
}

export default withAuthConsumer(AppHeader)
