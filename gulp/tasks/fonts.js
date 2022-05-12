const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('src/fonts/**/*.{eot,woff2,woff,ttf,svg}')
    .pipe(gulp.dest('build/fonts'))
}