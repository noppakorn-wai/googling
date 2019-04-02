import styled from '@emotion/styled'
import { Input as AntdInput } from 'antd'

import 'antd/lib/input/style/index.less'
import 'antd/lib/button/style/index.less'

const StyledInput = styled(AntdInput)``
const StyledInputGroup = styled(AntdInput.Group)``
const StyledInputSearch = styled(AntdInput.Search)``
const StyledInputTextArea = styled(AntdInput.TextArea)``
const StyledInputPassword = styled(AntdInput.Password)``

const Input = StyledInput
Input.Group = StyledInputGroup
Input.Search = StyledInputSearch
Input.TextArea = StyledInputTextArea
Input.Password = StyledInputPassword

export default Input
