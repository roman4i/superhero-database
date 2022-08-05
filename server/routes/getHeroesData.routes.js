const getHeroesDataController = require('../controllers/getHeroesData.controllers');

const getHeroesData = (req, res) => {
 getHeroesDataController(res)
}

module.exports = getHeroesData;