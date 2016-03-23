import webpackDev from './webpack.dev';
import webpack from 'webpack';

webpackDev.output.filename = '[name].[hash].js';
webpackDev.plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: false
  })
];
export default webpackDev;