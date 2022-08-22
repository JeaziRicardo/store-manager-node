const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRoute = Router();

saleRoute.post('/', saleController.dataSale);

module.exports = saleRoute;