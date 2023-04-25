const fs = require("fs/promises");

const filePath = require("./filePath");

const all = async () => {
  try {
    const data = await fs.readFile(filePath);
    const skills = JSON.parse(data);
    return skills;
  } catch (err) {
    throw err;
  }
};

module.exports = all;
