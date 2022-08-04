const paths = require('../config/paths');
const path = require('path');

const homeRoute = (req, res) => {
  res.sendFile(path.join(paths.build, 'index.html'));
}

module.exports = homeRoute;
