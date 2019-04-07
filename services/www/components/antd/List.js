import styled from '@emotion/styled'
import { List as AntdList } from 'antd'

import 'antd/lib/list/style/index.less'

const StyledList = styled(AntdList)``
const StyledListItem = styled(AntdList.Item)``
const StyledListItemMeta = styled(AntdList.Item.Meta)``

const List = StyledList
List.Item = StyledListItem
List.Item.Meta = StyledListItemMeta

export default List
