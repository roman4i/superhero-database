const db = require('../config/dbConfig'); 

const getHeroesData = async (res) => {
  try {
    await db.client.connect();
    const heroesData = await db.heroesCollection.find({}).toArray();
    res.send(JSON.stringify(heroesData));
  } catch(err) {
    console.log(err.message);
    res.status(400).end();
  } finally {
    await db.client.close();
  }
}

module.exports = getHeroesData;
