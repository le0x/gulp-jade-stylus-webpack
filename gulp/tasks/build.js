var gulp = require('gulp');

gulp.task('build', ['webpack', 'stylus', 'jade', 'imagemin', 'copy']);
