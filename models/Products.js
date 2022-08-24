const connection = require('./connection');

const Products = {
  getAllProducts: async () => {
    const [products] = await connection.execute(
      'SELECT id, name FROM StoreManager.products;',
    );
    return products;
  },

  productById: async (id) => {
    const [[product]] = await connection.execute(
      `SELECT id, name 
      FROM StoreManager.products
        WHERE id = ?;`,
      [id],
    );
    return product;
  },

  createProduct: async (name) => {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO StoreManager.products (name) VALUES (?);',
      [name],
    );
    return { id: insertId, name };
  },

  upProduct: async (name, productId) => {
    const [{ affectedRows }] = await connection.execute(
      `
      UPDATE StoreManager.products
      SET name = ?
      WHERE id = ?;
    `,
      [name, productId],
    );
    
    return { affectedRows };
  },
};

module.exports = Products;
