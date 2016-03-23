import gulp from 'gulp';
import webpack from 'webpack';
import nodemon from 'nodemon';
import webpackConfig from './webpack.config';

gulp.task('server', ['server-watch'], () => {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: './build/app.js',
    ignore: ['*'],
    // watch: [],
    ext: 'noop'
  }).on('restart', () => {
    console.log('restart server ok.');
  })
})

gulp.task('server-watch', () => {
  webpack(webpackConfig).watch(100, (err, stats) => {
    console.log(stats.toString({
        chunks: false,
        colors: true,
      })
    );
    if(!err) nodemon.restart();
  })
})
