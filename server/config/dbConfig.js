const { MongoClient } = require('mongodb');

const dbUri = 'mongodb://localhost:27017/';

const client = new MongoClient(dbUri);
const database = client.db('herodb');
const heroes = database.collection('heroes-data')

module.exports.client = client;
module.exports.heroesCollection = heroes;