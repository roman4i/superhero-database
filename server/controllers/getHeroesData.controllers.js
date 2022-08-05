const db = require('../config/dbConfig'); 

const getHeroesData = async () => {
  try {
    const heroesData = await db.heroesCollection.find({}).toArray();
    
    return heroesData;
  } catch(err) {
    console.log(err.message);
  } finally {
    await db.client.close();
  }
}

module.exports = getHeroesData;
