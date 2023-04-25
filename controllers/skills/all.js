const skillsOperations = require("../../model/skills");

const all = async (__, res, next) => {
  try {
    const skills = await skillsOperations.all();
    res.json({
      result: skills,
      status: "success",
      code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = all;
