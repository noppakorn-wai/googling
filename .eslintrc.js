module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    curly: 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 100, ignoreComments: true, ignoreUrls: true }],
    'no-console': ['error', { allow: ['debug', 'info', 'warn', 'error'] }],
    'no-lonely-if': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/require-default-props': 'off',
    semi: ['error', 'never'],
  },
}
