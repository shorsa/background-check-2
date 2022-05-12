const del = require("del");

module.exports = async function clean(callback){
    await del('build');
    return callback();
};