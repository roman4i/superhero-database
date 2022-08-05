const newHeroController = require('../controllers/newHero.controllers');

const newHeroRoute = (req, res) => {
  newHeroController(req, res);
}

module.exports = newHeroRoute;