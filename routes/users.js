const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const logger = require('../services/logger');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Login. */
router.post('/login', function(req, res) {
  logger.log("debug", 'Login API called');
  userController.login(req, res);
});

module.exports = router;
