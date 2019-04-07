import React from 'react'
import { css } from '@emotion/core'
import { Breadcrumb, Layout } from 'www/components/antd'
import AppHeader from 'www/components/app/AppHeader'
import SearchList from 'www/components/searchList/SearchList'

const SearchListPage = () => (
  <Layout>
    <AppHeader />
    <Layout.Content
      css={css`
        min-height: calc(100vh - 65px);
        height: calc(100vh - 65px);
        max-height: calc(100vh - 65px);
        padding: 0 50px;
      `}
    >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Searches</Breadcrumb.Item>
      </Breadcrumb>
      <div
        css={css`
          background: #fff;
        `}
      >
        <SearchList />
      </div>
    </Layout.Content>
  </Layout>
)

export default SearchListPage
