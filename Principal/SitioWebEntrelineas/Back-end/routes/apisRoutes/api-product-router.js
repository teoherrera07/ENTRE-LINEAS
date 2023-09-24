const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/apisControllers/api-product-controller');

router.get('/last', apiProductController.last);
router.get('/', apiProductController.list);
router.get('/:id', apiProductController.detail);


module.exports = router