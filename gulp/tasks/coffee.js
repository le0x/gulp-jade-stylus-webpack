var gulp = require('gulp');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');
var config = require('../config').coffee;

gulp.task('coffee', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(plumber()) // エラーが発生しても処理を継続
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(config.dest));
});
