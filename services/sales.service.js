const CustomError = require('../errors/customError');
const validate = require('../middlewares/validateMiddleware');
const Sales = require('../models/Sales');

const saleService = {
  dataSale: async (itemsSold) => {
    await validate.schemaSale(itemsSold);
    const saleId = await Sales.insertSale();
    Promise.all(
      itemsSold.map(async ({ productId, quantity }) => {
        await Sales.insertDataSale(saleId, productId, quantity);
      }),
    );
    return { id: saleId, itemsSold };
  },

  allSales: async () => {
    const sales = await Sales.getAllSales();
    return sales;
  },

  saleById: async (saleId) => {
    const sale = await Sales.getSaleById(saleId);

    if (sale.length === 0) throw new CustomError(404, 'Sale not found');

    return sale;
  },
};

module.exports = saleService;