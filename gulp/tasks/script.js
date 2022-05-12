const gulp = require('gulp');
const fileInclude = require('gulp-file-include');

module.exports = function script() {
    return gulp.src('src/js/*.js')
        .pipe(fileInclude())
        .pipe(gulp.dest('build/js'))
};