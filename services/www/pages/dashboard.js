import React from 'react'
import { css } from '@emotion/core'
import { Breadcrumb, Layout, List, Typography } from 'www/components/antd'
import AppHeader from 'www/components/app/AppHeader'

const DashboardPage = () => (
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
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Search List</Breadcrumb.Item>
      </Breadcrumb>
      <div
        css={css`
          background: #fff;
        `}
      >
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={['search list 1', 'search list 2', 'search list 3']}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    </Layout.Content>
  </Layout>
)

export default DashboardPage
