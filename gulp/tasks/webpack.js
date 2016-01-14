var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var config = require('../config');

gulp.task('webpack.build', function () {
    gulp.src(config.webpack.entry)
        .pipe(webpack(config.webpack))
        .pipe(gulp.dest(config.js.dest));
});

// uglify
gulp.task('webpack.uglify', function () {
    return gulp.src(config.js.uglify)
        .pipe(uglify(config.js.options))
        .pipe(rename(config.js.rename))     // rename
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('webpack', ['webpack.build', 'webpack.uglify']);
