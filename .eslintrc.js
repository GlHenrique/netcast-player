module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
