const uploadImageController = require('../controllers/uploadImage.controllers');

const uploadImageRoute = (req, res) => {
  uploadImageController(req, res);
}

module.exports = uploadImageController;
