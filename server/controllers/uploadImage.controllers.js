const path = require('path');

const imgsFolder = path.join(path.dirname(__dirname), 'images');

const uploadImageController = async (req, res) => {
  try {
    if(req.files) {
      for(let key in req.files) {
        req.files[key].mv(imgsFolder+ '/' + req.files[key].name);
      }
      res.status(200).end();
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error.message);
  }
}

module.exports = uploadImageController;