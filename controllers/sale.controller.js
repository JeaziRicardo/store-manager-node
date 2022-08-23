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

  saleById: async (req, res) => {
    const { id } = req.params;

    const sale = await saleService.saleById(id);

    res.status(200).json(sale);
  },
};

module.exports = saleController;