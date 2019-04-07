import styled from '@emotion/styled'
import { Spin as AntdSpin } from 'antd'

import 'antd/lib/spin/style/index.less'

const StyledSpin = styled(AntdSpin)``

StyledSpin.setDefaultIndicator = AntdSpin.setDefaultIndicator.bind(AntdSpin)

export default StyledSpin
