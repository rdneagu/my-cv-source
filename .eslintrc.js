module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-param-reassign': 'off',
    'max-len': ["error", { "code": 300 }],
    'object-curly-newline': ["error", { "consistent": true }],
    'no-throw-literal': 'off',
    'linebreak-style': 'off',
    'no-plusplus': 'off',
    'new-cap': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
