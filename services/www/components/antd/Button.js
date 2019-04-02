import styled from '@emotion/styled'
import { Button as AntdButton } from 'antd'

import 'antd/lib/button/style/index.less'

const StyledButon = styled(AntdButton)``
const StyledButonGroup = styled(AntdButton.Group)``

const Button = StyledButon
Button.Group = StyledButonGroup

export default Button
