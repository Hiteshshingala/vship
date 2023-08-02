const express = require('express');
const router = express.Router();
const logger = require('../services/logger');
const responseService = require('../services/responceService');

router.get('/priority', function(req, res, next) {
  logger.log("info", 'get priority called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get priority', []);
  res.status(status).send(payload);
});

router.get('/order-type', function(req, res, next) {
    logger.log("info", 'get order type called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get order type', []);
    res.status(status).send(payload);
});

router.get('/departments', function(req, res, next) {
    logger.log("info", 'get departments called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get departments', []);
    res.status(status).send(payload);
});

router.get('/position-list', function(req, res, next) {
    logger.log("info", 'get position list called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get position list', []);
    res.status(status).send(payload);
});
// need to change name(Type Dropdown(Comp/Cons))
router.get('/purchase-type', function(req, res, next) {
    logger.log("info", 'get purchase type called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get purchase type', []);
    res.status(status).send(payload);
});

router.get('/component-search', function(req, res, next) {
    logger.log("info", 'get component search called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get component search', []);
    res.status(status).send(payload);
});

router.get('/consumable-search', function(req, res, next) {
    logger.log("info", 'get consumable search called');
    const {status, payload} = responseService.handleSuccess(200, 'successfully get consumable search', []);
    res.status(status).send(payload);
});




  /////////////////


router.get('/priority', function(req, res, next) {
  logger.log("info", 'get priority called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get priority', []);
  res.status(status).send(payload);
});

router.get('/order-type', function(req, res, next) {
  logger.log("info", 'get order type called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get order type', []);
  res.status(status).send(payload);
});

router.get('/departments', function(req, res, next) {
  logger.log("info", 'get departments called');
  const {status, payload} = responseService.handleSuccess(200, 'successfully get order departments', []);
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
