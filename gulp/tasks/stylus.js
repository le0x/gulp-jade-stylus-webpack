var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var nib = require('nib'); // Stylusのmixin
var config = require('../config').stylus;

// concat
gulp.task('stylus.concat', function () {
    gulp.src(config.src)
        .pipe(plumber())
        .pipe(stylus({use: [nib()]}))
        .pipe(concat(config.output))              // 1つのファイルに固める
        .pipe(autoprefixer(config.autoprefixer))  // vendor-prefixつける
        .pipe(gulp.dest(config.dest));
});

// minify
gulp.task('stylus.min', function () {
    return gulp.src(config.minify)
        .pipe(plumber())
        .pipe(minify())                  // minify
        .pipe(rename(config.rename))     // rename
        .pipe(gulp.dest(config.dest));
});

gulp.task('stylus', ['stylus.concat', 'stylus.min']);
