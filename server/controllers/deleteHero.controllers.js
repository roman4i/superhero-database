const db = require('../config/dbConfig');

const deleteHeroController = async (req, res) => {
  try {
    const result = await db.heroesCollection.deleteOne({real_name: req.params.real_name});
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
    db.client.close()
  }
}

module.exports = deleteHeroController;
