const getHeroesDataController = require('../controllers/getHeroesData.controllers');

const getHeroesData = (req, res) => {
  const result = getHeroesDataController();
  result.then(toRes => {
    res.send(JSON.stringify(toRes));
  })
}

module.exports = getHeroesData;