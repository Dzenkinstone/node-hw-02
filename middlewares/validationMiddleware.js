const Joi = require("joi");

module.exports = {
  postContactValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().alphanum().required(),
      email: Joi.string().required(),
      phone: Joi.string().alphanum().required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.json(400, { message: "missing required name field" });
    }

    next();
  },

  putContactValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().alphanum().required(),
      email: Joi.string().required(),
      phone: Joi.string().alphanum().required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.json(400, { message: "missing required name field" });
    }

    next();
  },
};
