'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var config = require('../configs/paths');
var liveReload = require('gulp-livereload');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');


gulp.task('styles', function () {
  gulp.src(config.styles.origin)
    .pipe(sass.sync().on('error', gulpUtil.log))
    .pipe(sourcemaps.init())
    .pipe(concat('app.css').on('error', gulpUtil.log))
    //.pipe(minifyCss().on('error', gulpUtil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.styles.destination))
    .pipe(liveReload());
});
