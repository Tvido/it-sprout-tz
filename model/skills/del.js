const updateSkills = require("./updateSkills");
const all = require("./all");

const del = async (skillId) => {
  try {
    const skills = await all();
    const indx = skills.findIndex(
      (item) => String(item.id) === String(skillId)
    );
    if (indx === -1) {
      return null;
    }
    const newSkills = skills.filter(
      (item) => String(item.id) !== String(skillId)
    );
    await updateSkills(newSkills);
    return skills[indx];
  } catch (error) {
    throw error;
  }
};

module.exports = del;
