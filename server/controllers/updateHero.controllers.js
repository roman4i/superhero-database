const db = require('../config/dbConfig');

const updateHeroController = async (req, res) => {
  try {
    const element = await db.heroesCollection.findOne({_id: req.params.id});
    let differences = {};
    for(const item in element) {
      if(element[item] !== req.params[item]) differences.push(req.params[item]);
    }
    try {
      db.heroesCollection.updateOne({id: req.params.id}, {...differences})
      res.code(200);
    } catch (updateError) {
      res.code(503);
      console.log(updateError.message);
    }
  } catch (error) {
    res.code(503);
    console.log(error.message);
  } finally {
    res.end();
    db.client.close();
  }
}

module.exports = updateHeroController;
