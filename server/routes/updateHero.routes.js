const updateHeroController = require('../controllers/updateHero.controllers');

const updateHeroRoute = (req, res) => {
  updateHeroController(req, res);
}

module.exports = updateHeroRoute;
