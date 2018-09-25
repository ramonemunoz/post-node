const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');
const apiController = require('../controllers/apiController');
// const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', feedController.images);

router.get('/api', apiController.image);

module.exports = router;
