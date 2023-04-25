const fs = require("fs/promises");

const filePath = require("./filePath");

const updateSkills = async (newSkills) => {
  const contuctsString = JSON.stringify(newSkills);
  await fs.writeFile(filePath, contuctsString);
};

module.exports = updateSkills;
