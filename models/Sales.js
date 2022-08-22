const connection = require('./connection');

const Sales = {
  insertSale: async () => {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
    );
    return insertId;
  },

  insertDataSale: async (saleId, productId, quantity) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
      [saleId, productId, quantity],
    );
  },
};

module.exports = Sales;