'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var config = require('../configs/paths');
var liveReload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');


gulp.task('images', function () {
  gulp.src(config.images.origin)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [imageminPngquant()]
    }).on('error', gulpUtil.log))
    .pipe(gulp.dest(config.images.destination))
    .pipe(liveReload());
});
