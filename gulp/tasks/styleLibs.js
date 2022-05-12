const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

module.exports = function styleLibs() {
	return gulp.src([
		'src/styles/libs/*.css',
	])
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('build/css/libs'))
};