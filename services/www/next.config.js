const { compose } = require('lodash/fp')
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (process.env.NODE_ENV !== 'production') {
  if (typeof require !== 'undefined' && typeof require.extensions !== 'undefined') {
    require.extensions['.less'] = () => {}
  }
}

module.exports = compose(withLess)({
  // @zeit/next-less
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})
