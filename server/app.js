const express = require('express');
const path = require('path');
const paths = require('./config/paths');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');

app.use(express.static(paths.build));
app.use(express.json());
app.use(cors());

app.get('/', routes.home);
app.get('/getHeroesData', routes.getHeroesData);
app.post('/newHero', routes.newHero);
app.delete('/deleteHero', routes.deleteHero);
app.put('/updateHero', routes.updateHero);

app.listen(3001, () => {
  console.log('Example app listening on port 3000');
})
