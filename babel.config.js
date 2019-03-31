module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8.10',
          browsers: ['defaults', 'ie 11'],
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./services'],
        alias: {
          services: './services',
        },
      },
    ],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
    [
      'import',
      {
        libraryName: 'lodash/fp',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash/fp',
    ],
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-react-jsx'],
    },
  },
}
