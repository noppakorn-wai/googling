import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Button, Card, Form, Icon, Input, Typography } from 'www/components/antd'

const { Title } = Typography

const LoginPage = ({ form: { getFieldDecorator, validateFields } }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    validateFields()
  }
  return (
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
      <Form onSubmit={handleSubmit}>
        <Title>Googling</Title>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ type: 'email', required: true, message: 'please input your email' }],
          })(<Input prefix={<Icon type="mail" />} placeholder="email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'please input your password' }],
          })(<Input.Password prefix={<Icon type="lock" />} placeholder="password" />)}
        </Form.Item>
        <Button block type="primary" htmlType="submit">
          Login
        </Button>
      </Form>
    </Card>
  )
}

LoginPage.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFields: PropTypes.func,
  }),
}

export default Form.create({ name: 'login-form' })(LoginPage)
