'use strict';

var gulp = require('gulp');
var config = require('./gulp/configs/paths');
var sequence = require('gulp-sequence');
var liveReload = require('gulp-livereload');
require('require-dir')('./gulp/tasks');


gulp.task('default', ['build']);
gulp.task('build', sequence('sprites', ['images', 'styles', 'scripts', 'templates']));
// gulp.task('deploy', ['build', 'publish']);
gulp.task('watch', function () {
  liveReload.listen();
  gulp.watch(config.images.origin, { interval: 250 }, ['images']);
  gulp.watch(config.sprites.origin, { interval: 250 }, ['sprites', 'styles']);
  gulp.watch(config.styles.watch, { interval: 250 }, ['styles']);
  gulp.watch(config.scripts.origin.app, { interval: 250 }, ['scripts']);
  gulp.watch(config.templates.origin, { interval: 250 }, ['templates']);
});
