const path = require('path');

const serverFolder = path.parse(__dirname).dir;
const build = path.join(path.parse(serverFolder).dir, 'build');
const images = path.join(serverFolder, 'images');

module.exports.build = build;
module.exports.appFolder = serverFolder;
module.exports.images = images;
