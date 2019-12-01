/* eslint-env node */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        targets: {
          browsers: ['ie >= 9']
        }
      }
    ]
  ],
  plugins: [
    ['sinuous/babel-plugin-htm']
  ],
};
