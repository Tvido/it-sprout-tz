const express = require("express");
const router = express.Router();

const ctrl = require("../../../controllers/skills");

router.get("/", ctrl.all);

router.get("/:skillId", ctrl.getById);

router.post("/", ctrl.add);

router.put("/:skillId", ctrl.update);

router.delete("/:skillId", ctrl.remove);

module.exports = router;
