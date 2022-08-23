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

  getAllSales: async () => {
    const [sales] = await connection.execute(`
      SELECT 
        sale_id AS saleId,
        product_id AS productId,
        quantity,
        date
      FROM StoreManager.sales_products
      JOIN StoreManager.sales ON sale_id = id
      ORDER BY saleId, productId;
    `);

    return sales;
  },

  getSaleById: async (saleId) => {
    const [sale] = await connection.execute(
      `
      SELECT 
        product_id AS productId,
        quantity,
        date
      FROM StoreManager.sales_products
      JOIN StoreManager.sales ON sale_id = id
      WHERE id = ?
      ORDER BY productId;
    `,
      [saleId],
    );

    return sale;
  },
};

module.exports = Sales;