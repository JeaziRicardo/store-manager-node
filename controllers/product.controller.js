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

  createProduct: async (req, res) => {
    const { name } = req.body;

    const product = await productService.createProduct(name);

    res.status(201).json(product);
  },

  upProduct: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const upSale = await productService.upProduct(name, id);

    res.status(200).json(upSale);
  },
};

module.exports = productController;