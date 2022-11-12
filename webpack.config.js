module.exports = {
  stats: { preset: 'verbose' },
  target: ['web'],
  mode: 'development',
  entry: './src/index.js',
  output: { filename: './dist/index.js' },
  module: {
    rules: [
      { test: /human.esm.js/, type: 'javascript/esm' },
    ],
  },
};
