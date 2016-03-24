import webpackBase from './webpack.base';
import webpack from 'webpack';


export default {
  ...webpackBase,
  plugins:[
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};