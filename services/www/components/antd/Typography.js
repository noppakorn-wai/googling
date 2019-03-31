import styled from '@emotion/styled'
import { Typography as AntdTypography } from 'antd'

import 'antd/lib/typography/style/index.less'

const StyledTypography = styled(AntdTypography)``
const StyledTypographyText = styled(AntdTypography.Text)``
const StyledTypographyTitle = styled(AntdTypography.Title)``
const StyledTypographyParagraph = styled(AntdTypography.Paragraph)``

const Typography = StyledTypography
Typography.Text = StyledTypographyText
Typography.Title = StyledTypographyTitle
Typography.Paragraph = StyledTypographyParagraph

export default Typography
