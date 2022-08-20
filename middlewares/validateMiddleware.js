const CustomError = require('../errors/customError');

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
};

module.exports = validate;