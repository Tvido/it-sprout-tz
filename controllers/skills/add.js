const skillsOperations = require("../../model/skills");

const { joiSkillSchema } = require("../../validation");

const add = async (req, res, next) => {
  try {
    const { error } = joiSkillSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Missing required name field",
      });
    }

    const newSkill = await skillsOperations.add(req.body);
    res.status(201).json({ newSkill });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
