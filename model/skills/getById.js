const all = require("./all");

const getById = async (skillId) => {
  try {
    const skills = await all();
    const selectSkill = skills.find(
      (item) => String(item.id) === String(skillId)
    );
    if (!selectSkill) {
      return null;
    }
    return selectSkill;
  } catch (error) {
    throw error;
  }
};

module.exports = getById;
