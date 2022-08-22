const Sales = require('../models/Sales');

const saleService = {
  dataSale: async (itemsSold) => {
    const saleId = await Sales.insertSale();
    Promise.all(
      itemsSold.map(async ({ productId, quantity }) => {
        await Sales.insertDataSale(saleId, productId, quantity);
      }),
    );
    return { id: saleId, itemsSold };
  },
};

module.exports = saleService;