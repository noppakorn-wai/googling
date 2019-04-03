import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Icon, Input, Message } from 'www/components/antd'

const LoginForm = ({ onSubmit, form: { getFieldDecorator, validateFields } }) => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault()
    validateFields(async (err, { email, password }) => {
      if (err) return
      setLoading(true)
      try {
        await onSubmit(email, password)
      } catch (loginErr) {
        console.error(loginErr)
        Message.error('invalid email or password')
      } finally {
        setLoading(false)
      }
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ type: 'email', required: true, message: 'please input your email' }],
        })(<Input prefix={<Icon type="mail" />} placeholder="email" disabled={loading} />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'please input your password' }],
        })(
          <Input.Password
            prefix={<Icon type="lock" />}
            placeholder="password"
            disabled={loading}
          />,
        )}
      </Form.Item>
      <Button block type="primary" htmlType="submit" loading={loading}>
        Login
      </Button>
    </Form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFields: PropTypes.func,
  }),
}

export default Form.create({ name: 'login-form' })(LoginForm)
