'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var config = require('../configs/paths');
var liveReload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');


gulp.task('sprites', function () {
  var spriteStream = gulp.src(config.sprites.origin)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '/dist/images/sprite/sprite.png',
      cssName: 'sprite.scss',
      cssTemplate: './gulp/configs/sprite-template.scss.handlebars',
      algorithm: 'binary-tree'
    }).on('error', gulpUtil.log));

  var imgStream = spriteStream.img
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [imageminPngquant()]
    }).on('error', gulpUtil.log))
    .pipe(gulp.dest(config.sprites.destination.images));

  var cssStream = spriteStream.css
    .pipe(gulp.dest(config.sprites.destination.styles));

  var stream = merge(imgStream, cssStream)
    .pipe(liveReload());

    return stream;
});
