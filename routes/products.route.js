const { Router } = require('express');
const productController = require('../controllers/product.controller');

const prodRoute = Router();

prodRoute.get('/:id', productController.productsById);

prodRoute.get('/', productController.getProducts);
prodRoute.post('/', productController.createProduct);

module.exports = prodRoute;