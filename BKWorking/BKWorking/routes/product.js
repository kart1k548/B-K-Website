const path = require('path');

const express = require('express');

const router = express.Router();

const productController = require('../controllers/product-controller');

router.get('/', productController.productPage);

module.exports = router;