const path = require('path');

module.exports = {
  entry: ['core-js/fn/promise', 'whatwg-fetch', './src/app.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.less|\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
};
