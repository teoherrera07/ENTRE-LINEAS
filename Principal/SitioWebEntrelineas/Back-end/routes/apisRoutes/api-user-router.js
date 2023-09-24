const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/apisControllers/api-user-controller');

router.get('/last', apiUserController.last);
router.get('/', apiUserController.list);
router.get('/:id', apiUserController.detail);


module.exports = router
