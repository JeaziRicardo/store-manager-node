const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRoute = Router();

saleRoute.post('/', saleController.dataSale);
saleRoute.get('/', saleController.allSales);

module.exports = saleRoute;