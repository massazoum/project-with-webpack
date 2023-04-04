const path = require('path');

module.exports = {
 mode: 'development',
 // rest of the config
  entry: './src/index.js',
  output: {
   filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
   ],
 },
 devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
},
optimization: {
 runtimeChunk: 'single',
},
};
