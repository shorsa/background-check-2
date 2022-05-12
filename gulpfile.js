const gulp = require('gulp');

const clean = require('./gulp/tasks/clean');
const html = require('./gulp/tasks/html');
const pugToHtml = require('./gulp/tasks/pugToHtml');
const style = require('./gulp/tasks/style');
const styleLibs = require('./gulp/tasks/styleLibs');
const script = require('./gulp/tasks/script');
const scriptLibs = require('./gulp/tasks/scriptLibs');
const images = require('./gulp/tasks/images');
const imagesSvg = require('./gulp/tasks/imagesSvg');
const fonts = require('./gulp/tasks/fonts');
const pngSprite = require('./gulp/tasks/pngSprite');
const serve = require('./gulp/tasks/serve');

function setMode(mode = 'development') {
	return function (callback) {
		process.env.NODE_ENV = mode;
		callback();
	};
};


const dev = gulp.series(pngSprite, gulp.parallel(html, pugToHtml, style, styleLibs, script, scriptLibs, fonts, images, imagesSvg))
const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode('development'), build, serve)
module.exports.build = gulp.series(setMode('production'), build)
