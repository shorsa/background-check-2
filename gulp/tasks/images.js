const gulp = require('gulp');
const avif = require('gulp-avif');
const webp = require('gulp-webp');

module.exports = function images(){
    return gulp.src(['src/img/**/*.{png,jpg,jpeg}', '!src/img/sprite/*.*'])
        .pipe(avif({ quality: 70 }))
        .pipe(gulp.dest('build/img'))
        .pipe(gulp.src(['src/img/**/*.{png,jpg,jpeg}', '!src/img/sprite/*.*']))
        .pipe(webp({ quality: 70 }))
        .pipe(gulp.dest('build/img'))
        .pipe(gulp.src(['src/img/**/*.{png,jpg,jpeg,gif}', '!src/img/sprite/*.*']))
        .pipe(gulp.dest('build/img'))
};