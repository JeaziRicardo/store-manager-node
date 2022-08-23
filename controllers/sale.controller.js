const saleService = require('../services/sales.service');

const saleController = {
  dataSale: async (req, res) => {
    const sale = await saleService.dataSale(req.body);

    res.status(201).json(sale);
  },

  allSales: async (_req, res) => {
    const sales = await saleService.allSales();

    res.status(200).json(sales);
  },
};

module.exports = saleController;