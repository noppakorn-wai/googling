import styled from '@emotion/styled'
import { Form as AntdForm } from 'antd'

import 'antd/lib/form/style/index.less'

const StyledForm = styled(AntdForm)``
const StyledFormItem = styled(AntdForm.Item)``

const Form = StyledForm
Form.Item = StyledFormItem

Form.create = AntdForm.create

export default Form
