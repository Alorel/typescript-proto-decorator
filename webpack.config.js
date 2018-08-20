const {join} = require('path');
const merge = require('lodash/merge');
const cloneDeep = require('lodash/cloneDeep');

const base = {
  target: 'web',
  entry: join(__dirname, 'src', 'ProtoDecorator.ts'),
  output: {
    path: join(__dirname, 'dist', 'umd'),
    libraryTarget: 'umd',
    library: 'ProtoDecorator'
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: join(__dirname, 'tsconfig.esm5.json'),
          }
        }]
      }
    ]
  }
};

module.exports = [
  merge(cloneDeep(base), {mode: 'development', output: {filename: 'ProtoDecorator.js'}}),
  merge(cloneDeep(base), {mode: 'production', output: {filename: 'ProtoDecorator.min.js'}})
];
