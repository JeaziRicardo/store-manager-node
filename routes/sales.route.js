const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRoute = Router();

saleRoute.get('/:id', saleController.saleById);

saleRoute.post('/', saleController.dataSale);
saleRoute.get('/', saleController.allSales);

module.exports = saleRoute;