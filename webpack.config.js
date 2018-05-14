const {join} = require('path');

module.exports = {
  target: 'web',
  entry: join(__dirname, 'src', 'ProtoDecorator.ts'),
  output: {
    path: join(__dirname, 'dist', 'umd'),
    filename: 'ProtoDecorator.js',
    libraryTarget: 'umd',
    library: 'ProtoDecorator'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: './tsconfig.esm5.json',
            useCache: true,
            cacheDirectory: join(__dirname, 'node_modules', '.cache', '.awcache')
          }
        }]
      }
    ]
  },
  mode: 'production'
};