const express = require('express');
const router = express.Router();
const apiTopicsController = require('../../controllers/apisControllers/api-topics-controller');

router.get('/', apiTopicsController.topics);


module.exports = router