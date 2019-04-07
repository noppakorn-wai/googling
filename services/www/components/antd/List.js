import styled from '@emotion/styled'
import { List as AntdList } from 'antd'

import 'antd/lib/list/style/index.less'

const StyledList = styled(AntdList)``
const StyledListItem = styled(AntdList.Item)``

const List = StyledList
List.Item = StyledListItem

export default List
