const home = require('./home.routes');
const getHeroesData = require('./getHeroesData.routes');
const deleteHero = require('./deleteHero.routes');
const newHero = require('./newHero.routes');
const updateHero = require('./updateHero.routes');

module.exports.home = home;
module.exports.getHeroesData = getHeroesData;
module.exports.deleteHero = deleteHero;
module.exports.newHero = newHero;
module.exports.updateHero = updateHero;
