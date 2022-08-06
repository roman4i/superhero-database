const db = require('../config/dbConfig');
const mongo = require('mongodb');

const deleteHeroController = async (req, res) => {
  try {
    await db.client.connect();
    const result = await db.heroesCollection.deleteOne({ _id: new mongo.ObjectID(req.body._id) });
    if(result.deletedCount === 1) {
      res.status(200);
    } else {
      res.status(400);
    }
  } catch (error) {
    res.status(500);
    console.log(error.message);
  } finally {
    res.end();
    await db.client.close()
  }
}

module.exports = deleteHeroController;
