const Joi = require("joi");

const joiSkillSchema = Joi.object({
  name: Joi.string().min(2).required(),
  description: Joi.string().min(2).required(),
  icons: Joi.array().min(2).required(),
});

module.exports = joiSkillSchema;
