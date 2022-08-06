const express = require('express');
const path = require('path');
const paths = require('./config/paths');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(express.static(paths.build));
app.use(express.static(paths.images));
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  createParentPath: true,
}))

app.get('/', routes.home);
app.get('/getHeroesData', routes.getHeroesData);
app.post('/newHero', routes.newHero);
app.post('/uploadImage', routes.uploadImage);
app.delete('/deleteHero', routes.deleteHero);
app.put('/updateHero', routes.updateHero);

app.listen(3001, () => {
  console.log('Example app listening on port 3000');
})
