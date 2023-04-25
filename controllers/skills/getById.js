const skillsOperations = require("../../model/skills");

const getById = async (req, res, next) => {
  try {
    const { skillId } = req.params;
    const skill = await skillsOperations.getById(skillId);
    if (!skill) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      skill,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
