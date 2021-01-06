const path = require('path');

const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home-controller');

router.get('/', homeController.homePage);

module.exports = router;