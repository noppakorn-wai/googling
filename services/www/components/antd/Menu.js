import { mapProps } from 'recompose'
import styled from '@emotion/styled'
import { Menu as AntdMenu } from 'antd'

import 'antd/lib/menu/style/index.less'
import 'antd/lib/tooltip/style/index.less'

const StyledMenu = styled(
  // mapProps need to be use to proxy theme props since emotion also use theme props
  mapProps(({ _theme: theme, ...props }) => ({ theme, ...props }))(AntdMenu),
)``
const StyledDivider = styled(AntdMenu.Divider)``
const StyledItem = styled(AntdMenu.Item)``
const StyledSubMenu = styled(AntdMenu.SubMenu)``
const StyledItemGroup = styled(AntdMenu.ItemGroup)``

const Menu = mapProps(({ theme, ...props }) => ({ _theme: theme, ...props }))(StyledMenu)
Menu.Divider = StyledDivider
Menu.Item = StyledItem
Menu.SubMenu = StyledSubMenu
Menu.ItemGroup = StyledItemGroup

export default Menu
