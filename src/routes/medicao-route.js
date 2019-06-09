'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/medicao-controller');
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.post('/sincronizar', controller.sincronizar);
/*router.put('/:id', controller.put);*/
router.delete('/', controller.delete);

module.exports = router;