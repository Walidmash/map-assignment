const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './views/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(__dirname, 'src/client/')
        }
      }]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new BundleAnalyzerPlugin()
  ]
};
