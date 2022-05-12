const gulp = require("gulp");
// const plumber = require("gulp-plumber");
const sass = require("gulp-sass")(require('node-sass'));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require('gulp-sourcemaps');
// const shorthand = require('gulp-shorthand');
// const cleanCSS = require('gulp-clean-css');
// const rename = require("gulp-rename");


module.exports = function style(){
    return gulp.src("src/styles/*.scss")
        // .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: true,
        }))
        // .pipe(shorthand())
        // .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/css'))
};