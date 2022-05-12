const gulp = require('gulp');

module.exports = function scriptLibs() {
    return gulp.src('src/js/libs/*.js')
        .pipe(gulp.dest('build/js/libs'))
};