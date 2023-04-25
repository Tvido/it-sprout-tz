const { v4 } = require("uuid");

const all = require("./all");
const updateSkills = require("./updateSkills");

const add = async (body) => {
  try {
    const newSkill = { ...body, id: v4() };
    const skills = await all();
    skills.push(newSkill);
    await updateSkills(skills);
    return newSkill;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
