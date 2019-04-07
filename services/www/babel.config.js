module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            node: '8.10',
            browsers: ['defaults', 'ie 11'],
          },
        },
        'transform-runtime': {
          useESModules: false,
        },
        'styled-jsx': {},
        'class-properties': {},
      },
    ],
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./services'],
      },
    ],
    [
      'import',
      {
        libraryName: 'antd',
      },
      'antd',
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
    [
      'import',
      {
        libraryName: 'recompose',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'recompose',
    ],
    [
      'import',
      {
        libraryName: 'www/components/antd',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'www/components/antd',
    ],
  ],
}
