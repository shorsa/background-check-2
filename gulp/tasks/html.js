const gulp = require('gulp');
const fileInclude = require('gulp-file-include');

module.exports = function html() {
    return gulp.src('src/*.html')
        .pipe(fileInclude())
        .pipe(gulp.dest('build'))
};