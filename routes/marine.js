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

router.get('/spare-part-type', function(req, res, next) {
    logger.log("info", 'get spare part type called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get order spare part type', []);
    res.status(status).send(payload);
});

router.get('/port-list', function(req, res, next) {
    logger.log("info", 'get port list called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get port list', []);
    res.status(status).send(payload);
});

router.get('/home-port', function(req, res, next) {
    logger.log("info", 'get home port called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get home port', []);
    res.status(status).send(payload);
});

router.get('/spare-part-details', function(req, res, next) {
  logger.log("info", 'get spare part details called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get order spare part details', []);
  res.status(status).send(payload);
});

router.post('/add-part-against-component', function(req, res, next) {
    logger.log("info", 'post add part against component');
    const {status, payload} = responseService.handleSuccess(200, 'successfully added part against component', []);
    res.status(status).send(payload);
});

router.post('/add-part-to-master', function(req, res, next) {
    logger.log("info", 'post add part to master');
    const {status, payload} = responseService.handleSuccess(200, 'successfully added part to master', []);
    res.status(status).send(payload);
});

router.post('/add-component', function(req, res, next) {
    logger.log("info", 'post add component');
    const {status, payload} = responseService.handleSuccess(200, 'successfully add component', []);
    res.status(status).send(payload);
});

module.exports = router;
