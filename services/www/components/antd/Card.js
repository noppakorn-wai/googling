import styled from '@emotion/styled'
import { Card as AntdCard } from 'antd'

import 'antd/lib/card/style/index.less'
import 'antd/lib/tabs/style/index.less'

const StyledCard = styled(AntdCard)``
const StyledCardGrid = styled(AntdCard.Grid)``
const StyledCardMeta = styled(AntdCard.Meta)``

const Card = StyledCard
Card.Grid = StyledCardGrid
Card.Meta = StyledCardMeta

export default Card
