const db = require('../config/dbConfig');
const mongo = require('mongodb');

const updateHeroController = async (req, res) => {
  try {
    await db.client.connect();
    const element = await db.heroesCollection.findOne({_id: new mongo.ObjectId(req.body._id)});
    let differences = {};
    for(const item in element) {
      if(element[item] !== req.body[item] && item !== '_id') {
        differences[item] = req.body[item]
      };
    }
    try {
      const toUpdate = {
        $set: {
          ...differences
        }
      }
      await db.heroesCollection.updateOne({_id: new mongo.ObjectID(req.body._id)}, toUpdate, (err, result) => {
        if(err) console.log(err.message);
        db.client.close();
      })
      res.status(200);
    } catch (updateError) {
      res.status(503);
      console.log(updateError.message);
    }
  } catch (error) {
    res.status(503);
    console.log(error.message);
  } finally {
    res.end();
  }
}

module.exports = updateHeroController;
