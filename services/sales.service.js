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

  allSale: async () => {
    const sales = await Sales.getAllSales();
    return sales;
  },
};

module.exports = saleService;