const skillsOperations = require("../../model/skills");

const { joiSkillSchema } = require("../../validation");

const update = async (req, res, next) => {
  try {
    const { error } = joiSkillSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.message,
      });
    }

    const { skillId } = req.params;
    const updateSkill = await skillsOperations.update(skillId, req.body);
    if (!req.body) {
      return res.status(404).json({ message: "missing fields" });
    }
    res.json({ updateSkill });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
