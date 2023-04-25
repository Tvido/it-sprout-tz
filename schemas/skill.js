const { Schema, model } = require("mongoose");

const { joiSkillSchema } = require("../validation");

const skillSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for skill"],
    },
    description: {
      type: String,
      required: [true, "Set description for skill"],
    },
    icons: {
      type: Array,
      required: [true, "Set icons data for skill"],
    },
  },
  { visrionKey: false, timestamps: true }
);

const Skill = model("skill", skillSchema);

module.exports = { Skill, joiSkillSchema };
