const updateSkills = require("./updateSkills");
const all = require("./all");

const update = async (skillId, body) => {
  try {
    const skills = await all();
    const idx = skills.findIndex((item) => String(item.id) === String(skillId));
    if (idx === -1) {
      return null;
    }
    skills[idx] = { ...skills[idx], ...body };
    await updateSkills(skills);
    return skills[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
