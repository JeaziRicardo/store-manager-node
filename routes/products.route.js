const { Router } = require('express');
const productController = require('../controllers/product.controller');
const validate = require('../middlewares/validateMiddleware');

const prodRoute = Router();

prodRoute.get('/:id', productController.productsById);

prodRoute.get('/', productController.getProducts);
prodRoute.post('/', validate.productName, productController.createProduct);

module.exports = prodRoute;