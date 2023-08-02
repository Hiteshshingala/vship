const express = require('express');
const router = express.Router();
const logger = require('../services/logger');
const responseService = require('../services/responceService');

router.get('/vessels', function(req, res, next) {
  logger.log("info", 'get vassels option called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get vessels', []);
  res.status(status).send(payload);
});

router.get('/projects', function(req, res, next) {
  logger.log("info", 'get projects called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get projects', []);
  res.status(status).send(payload);
});

router.get('/priority', function(req, res, next) {
  logger.log("info", 'get priority called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get priority', []);
  res.status(status).send(payload);
});

module.exports = router;
