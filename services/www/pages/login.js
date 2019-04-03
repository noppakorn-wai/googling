import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Card, Icon, Typography } from 'www/components/antd'
import { Consumer as AuthConsumer } from 'www/contexts/AuthContext'
import LoginForm from 'www/components/login/LoginForm'

const { Title } = Typography

const LoginPage = () => (
  <Card
    css={css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 32px);
      max-width: 365px;
      ${Title} {
        text-align: center;
      }
      ${Icon}, .anticon {
        color: rgba(0, 0, 0, 0.25);
      }
    `}
  >
    <Title>Googling</Title>
    <AuthConsumer>{({ login }) => <LoginForm onSubmit={login} />}</AuthConsumer>
  </Card>
)

LoginPage.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFields: PropTypes.func,
  }),
}

export default LoginPage
