const gulp = require('gulp');
const gulpif = require("gulp-if");
const spritesmith = require('gulp.spritesmith');

module.exports = function pngSprite() {
    return gulp.src('src/img/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite-png.scss',
            imgPath: '../img/sprite/sprite.png',
            algorithm: 'binary-tree',
            cssTemplate: 'scss.template.mustache',
            padding: 5,
        }))
        .pipe(gulpif('*.png', gulp.dest('build/img/sprite/')))
        .pipe(gulpif('*.scss', gulp.dest('src/styles/')))
};