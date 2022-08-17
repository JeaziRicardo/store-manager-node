const CustomError = require('../errors/customError');
const Products = require('../models/Products');

const productService = {
  getProducts: async () => {
    const data = await Products.getAllProducts();
    return data;
  },

  productsById: async (id) => {
    const product = await Products.productById(id);

    if (!product) throw new CustomError(404, 'Product not found');

    return product;
  },
};

module.exports = productService;