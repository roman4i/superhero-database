const deleteHeroController = require('../controllers/deleteHero.controllers');
const deteHeroController = require('../controllers/deleteHero.controllers');

const deleteHeroRoute = (req, res) => {
  deleteHeroController(req, res);
}

module.exports = deleteHeroRoute;
