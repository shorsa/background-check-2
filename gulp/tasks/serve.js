const gulp = require('gulp');
const server = require('browser-sync').create();

const html = require('./html');
const pugToHtml = require('./pugToHtml');
const style = require('./style');
const stylelibs = require('./stylelibs');
const script = require('./script');
const scriptLibs = require('./scriptLibs');
const images = require('./images');
const imagesSvg = require('./imagesSvg');
const fonts = require('./fonts');
const pngSprite = require('./pngSprite');

function reload(callback){
    server.reload();
    callback();
};

module.exports = function serve(callback){
    server.init({
        server: {
            baseDir: './build/'
        },
        notify: false,
        open: true,
    });
    gulp.watch(['src/*.html', 'src/shared/html/*.html'], gulp.series(html, reload));
    gulp.watch('src/pages/**/*.pug', gulp.series(pugToHtml, reload));
    gulp.watch('src/styles/**/*.scss', gulp.series(style, reload));
    gulp.watch('src/styles/libs/**/*.css', gulp.series(stylelibs, reload));
    gulp.watch('src/js/**/*.js', gulp.series(script, reload));
    gulp.watch('src/js/libs/**/*.js', gulp.series(scriptLibs, reload));
    gulp.watch(['src/img/**/*.{png,jpg,jpeg,gif}', '!src/img/sprite/**/*.*'], gulp.series(images, reload));
    gulp.watch('src/img/**/*.svg', gulp.series(imagesSvg, reload));
    gulp.watch('src/fonts/**/*.{eot,woff2,woff,ttf,svg}', gulp.series(fonts, reload));
    gulp.watch('src/img/sprite/**/*.png', gulp.series(pngSprite, reload));
    return callback();
};