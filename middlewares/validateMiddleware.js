const CustomError = require('../errors/customError');
const Products = require('../models/Products');
const schema = require('./schema');

const validate = {
  productName: (req, _res, next) => {
    const { name } = req.body;

    if (!name) {
      const message = '"name" is required';
      throw new CustomError(400, message);
    }
    if (name.length < 5) {
      const message = '"name" length must be at least 5 characters long';
      throw new CustomError(422, message);
    }

    return next();
  },

  schemaSale: async (itemsSold) => {
    const { error } = schema.validate(itemsSold);
    if (error) {
      const [status, message] = error.message.split('|');
      throw new CustomError(+status, message);
    }
    
    await Promise.all(
      itemsSold.map(async ({ productId }) => {
        const product = await Products.productById(productId);
        if (!product) {
          throw new CustomError(404, 'Product not found');
        }
      }),
    );
  },
};

module.exports = validate;