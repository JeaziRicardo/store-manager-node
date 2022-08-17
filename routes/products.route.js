const { Router } = require('express');
const productController = require('../controllers/product.controller');

const prodRoute = Router();

prodRoute.get('/', productController.getProducts);
prodRoute.get('/:id', productController.productsById);

module.exports = prodRoute;