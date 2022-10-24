const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      alias: {
        map: [['^~', path.resolve(__dirname, './src')]],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    'import/ignore': 'node_modules',
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
  plugins: [
    'eslint-plugin-prettier',
    '@typescript-eslint',
    'import',
    'unused-imports',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': 2,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports-ts': 2,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
