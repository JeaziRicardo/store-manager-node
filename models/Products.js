const connection = require('./connection');

const Products = {
  getAllProducts: async () => {
    const [products] = await connection.query(
      'SELECT id, name FROM StoreManager.products;',
    );
    return products;
  },

  productById: async (id) => {
    const [[product]] = await connection.query(
      `SELECT id, name 
      FROM StoreManager.products
        WHERE id = ?;`,
      [id],
    );
    return product;
  },
};

module.exports = Products;
