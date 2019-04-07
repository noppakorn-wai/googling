import styled from '@emotion/styled'
import { Upload as AntdUpload } from 'antd'

import 'antd/lib/upload/style/index.less'

const StyledUpload = styled(AntdUpload)``
const StyledUploadDragger = styled(AntdUpload.Dragger)``

const Upload = StyledUpload
Upload.Dragger = StyledUploadDragger

export default Upload
