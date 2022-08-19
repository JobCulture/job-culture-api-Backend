const express = require('express');
const router = express.Router();
const characteristicController = require('../controllers/characteristicControllers');

router.get('/characteristics', characteristicController.getCharacteristics) //get all characteristics

module.exports = router;