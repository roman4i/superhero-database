const path = require('path');

const appFolder = path.parse(__dirname).dir;
const build = path.join(path.parse(appFolder).dir, 'build');

module.exports.build = build;
module.exports.appFolder = appFolder;
