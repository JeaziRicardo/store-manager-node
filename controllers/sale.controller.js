const saleService = require('../services/sales.service');

const saleController = {
  dataSale: async (req, res) => {
    const sale = await saleService.dataSale(req.body);

    res.status(201).json(sale);
  },
};

module.exports = saleController;