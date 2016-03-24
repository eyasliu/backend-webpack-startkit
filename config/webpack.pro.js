import webpackDev from './webpack.base';
import webpack from 'webpack';

export default {
  ...webpackDev,
  output: {
    ...webpackDev.output,
    filename: 'app.[hash].js',
  },
  plugins: [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: false
  })
]
};