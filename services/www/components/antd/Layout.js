import styled from '@emotion/styled'
import { Layout as AntdLayout } from 'antd'

import 'antd/lib/layout/style/index.less'

const StyledLayout = styled(AntdLayout)``
const StyledLayoutHeader = styled(AntdLayout.Header)``
const StyledLayoutFooter = styled(AntdLayout.Footer)``
const StyledLayoutContent = styled(AntdLayout.Content)``
const StyledLayoutSider = styled(AntdLayout.Sider)``

const Layout = StyledLayout
Layout.Header = StyledLayoutHeader
Layout.Footer = StyledLayoutFooter
Layout.Content = StyledLayoutContent
Layout.Sider = StyledLayoutSider

export default Layout
