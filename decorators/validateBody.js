const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(error.message);
    if (error) {
      if (Object.keys(req.body).length === 0) {
        throw HttpError(400, "missing fields");
      }
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;