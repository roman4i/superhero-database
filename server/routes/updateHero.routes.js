const updateHeroController = require('../controllers/updateHero.controllers');

const updateHeroRoute = (req, res) => {
  updateHeroController();
}

module.exports = updateHeroRoute;
