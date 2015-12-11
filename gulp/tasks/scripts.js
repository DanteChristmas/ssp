'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var config = require('../configs/paths');
var liveReload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var order = require('gulp-order');


gulp.task('scripts', function () {
  var libStream = gulp.src(config.scripts.origin.lib)
    .pipe(sourcemaps.init())
    .pipe(order(['angular.js']))
    .pipe(concat('lib.js').on('error', gulpUtil.log))
    //.pipe(uglify().on('error', gulpUtil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.destination));

  var appStream = gulp.src(config.scripts.origin.app)
    .pipe(sourcemaps.init())
    .pipe(order(['services.js', 'app.js']))
    .pipe(concat('app.js').on('error', gulpUtil.log))
    //.pipe(uglify().on('error', gulpUtil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.destination));

  var stream = merge(libStream, appStream)
      .pipe(liveReload());

  return stream;
});
