const CustomError = require('../errors/customError');
const validate = require('../middlewares/validateMiddleware');
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

  createProduct: async (name) => {
    const product = await Products.createProduct(name);

    return product;
  },

  upProduct: async (name, productId) => {
    await validate.productById(productId);

    await Products.upProduct(name, productId);

    return { id: productId, name };
  },
};

module.exports = productService;