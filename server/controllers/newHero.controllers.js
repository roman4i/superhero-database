const base = require('../config/dbConfig'); 

const newHeroController = async (req, res) => {
  try {
    base.client.connect();
    const present = await base.heroesCollection.findOne({real_name: req.body.real_name});
    console.log(present);
    if(present === null || present.count === 0) {
      try {
        await base.heroesCollection.insertOne({...req.body});
        res.status(200);
      } catch (newErr) {
        console.log(newErr);
      }
    } else {
      res.status(400);
    }
  } catch (error) {
    res.status(500);
    console.log(error)
  } finally {
    res.end();
    await base.client.close()
  }
}

module.exports = newHeroController;