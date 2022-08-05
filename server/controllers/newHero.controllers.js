const base = require('../config/dbConfig'); 

const newHeroController = async (req, res) => {
  try {
    const present = await base.heroesCollection.findOne({name: req.params.name});
    if(await present.count() === 0) {
      try {
        base.heroesCollection.insertOne({...req.params});
        res.status(200);
      } catch (newErr) {
        console.log(newErr.message);
      }
    } else {
      res.status(400);
    }
  } catch (error) {
    res.status(500);
    console.log(error.message)
  } finally {
    res.end();
    base.client.close()
  }
}

module.exports = newHeroController;