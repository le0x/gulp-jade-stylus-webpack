var gulp  = require('gulp');
var imagemin  = require('gulp-imagemin');
var changed  = require('gulp-changed');
var config = require('../config').img;

gulp.task('imagemin', function(){
  return gulp.src(config.src)
    .pipe(changed(config.dest))     //変更を監視
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest));
});
