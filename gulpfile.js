var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('gulp-webpack');

// run server
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

// webpack
gulp.task('packup', function() {
  return gulp.src('javascripts/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'));
})

gulp.task('default', ['webserver']);
