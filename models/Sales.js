const connection = require('./connection');

const sales = {
  insertSale: async () => {
    const [insertId] = await connection.execute(
      'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
    );
    return insertId;
  },
};

module.exports = sales;