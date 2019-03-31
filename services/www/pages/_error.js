import React from 'react'
import PropTypes from 'prop-types'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    if (res) return { statusCode: res.statusCode }
    if (err) return { statusCode: err.statusCode }
    return { statusCode: null }
  }

  static propTypes = {
    statusCode: PropTypes.number,
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}

export default Error
