import styled from '@emotion/styled'
import { Breadcrumb as AntdBreadcrumb } from 'antd'

import 'antd/lib/breadcrumb/style/index.less'

const StyledBreadcrumb = styled(AntdBreadcrumb)``
const StyledBreadcrumbItem = styled(AntdBreadcrumb.Item)``

const Breadcrumb = StyledBreadcrumb
Breadcrumb.Item = StyledBreadcrumbItem

export default Breadcrumb
