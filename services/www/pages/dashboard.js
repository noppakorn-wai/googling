import React from 'react'
import PropTypes from 'prop-types'
import { withAuthConsumer } from 'www/contexts/AuthContext'
import { Spin } from 'www/components/antd'

const DashboardPage = ({ email, logout }) =>
  !email ? (
    <Spin spinning />
  ) : (
    <>
      Welcome to dashboard {email}
      <br />
      <button type="submit" onClick={logout}>
        logout
      </button>
    </>
  )

DashboardPage.propTypes = {
  email: PropTypes.string,
  logout: PropTypes.func,
}

export default withAuthConsumer(DashboardPage)
