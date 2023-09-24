const express = require('express');
const router = express.Router();
const apiCounterController = require('../../controllers/apisControllers/api-counter-controller');

router.get('/', apiCounterController.counter);


module.exports = router