const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: './services/functions.js',
  target: 'node',
  stats: 'errors-only',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.DB_TYPE': JSON.stringify(process.env.DB_TYPE),
      'process.env.DB_HOST': JSON.stringify(process.env.DB_HOST),
      'process.env.DB_USER': JSON.stringify(process.env.DB_USER),
      'process.env.DB_PASS': JSON.stringify(process.env.DB_PASS),
      'process.env.DB_NAME': JSON.stringify(process.env.DB_NAME),
    }),
  ],
  output: {
    path: path.join(__dirname, '../.build'),
    filename: 'index.js',
    libraryTarget: 'this',
  },
}
