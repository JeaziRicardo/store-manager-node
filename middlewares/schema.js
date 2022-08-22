const Joi = require('joi');

const schema = Joi.array().items(Joi.object({
    productId: Joi.number().required().messages({
      'number.base': '400|"productId" must be a number',
      'any.required': '400|"productId" is required',
    }),
    quantity: Joi.number().min(1).required().messages({
      'number.base': '400|"quantity" must be a number',
      'number.min': '422|"quantity" must be greater than or equal to {#limit}',
      'any.required': '400|"quantity" is required',
    }),
  }));

module.exports = schema;