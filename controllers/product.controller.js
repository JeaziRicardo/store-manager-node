const productService = require('../services/products.services');

const productController = {
  getProducts: async (_req, res) => {
    const products = await productService.getProducts();

    res.status(200).json(products);
  },

  productsById: async (req, res) => {
    const { id } = req.params;

    const product = await productService.productsById(id);

    res.status(200).json(product);
  },
};

module.exports = productController;