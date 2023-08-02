const express = require('express');
const router = express.Router();
const poController = require('../controller/purchaseOrder');
const authenticateJWT = require('../middleware/jwtMiddleware');
const logger = require('../services/logger');

/* GET home page. */
router.get('/po', authenticateJWT, function(req, res, next) {
  logger.log("info", 'get purchase order called');
  poController.getPO(req, res);
});

router.post('/po', authenticateJWT, function(req, res, next) {
  logger.log("info", 'add purchase order called');
  poController.addPO(req, res);
});

module.exports = router;
