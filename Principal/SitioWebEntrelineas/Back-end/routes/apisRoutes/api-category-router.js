const express = require('express');
const router = express.Router();
const apiCategoriesController = require('../../controllers/apisControllers/api-category-controller');

router.get('/', apiCategoriesController.categories);


module.exports = router