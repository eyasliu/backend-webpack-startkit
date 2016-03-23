import gulp from 'gulp';
import webpack from 'webpack';
import nodemon from 'nodemon';
import webpackDev from './webpack.dev';
import webpackPro from './webpack.pro';

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
  webpack(webpackDev).watch(100, (err, stats) => {
    console.log(stats.toString({
        chunks: false,
        colors: true,
      })
    );
    if(!err) nodemon.restart();
  })
})

gulp.task('build', () => {
  webpack(webpackPro).run((err, stats) => {
    console.log(stats.toString({
        chunks: false,
        colors: true,
      })
    );
  })
})
