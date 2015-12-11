'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var config = require('../configs/paths');
var liveReload = require('gulp-livereload');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('templates', function () {
  gulp.src(config.templates.origin)
    .pipe(templateCache('templates.js', { module: 'templates', standalone: true }).on('error', gulpUtil.log))
    .pipe(concat('templates.js').on('error', gulpUtil.log))
    //.pipe(uglify().on('error', gulpUtil.log))
    .pipe(gulp.dest(config.templates.destination))
    .pipe(liveReload());
});
