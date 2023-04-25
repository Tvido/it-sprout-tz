const skillsOperations = require("../../model/skills");

const remove = async (req, res, next) => {
  try {
    const { skillId } = req.params;
    const deleteSkill = await skillsOperations.del(skillId);
    if (!deleteSkill) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      deleteSkill,
      message: "skill deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
