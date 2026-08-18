const express = require("express");
const router = express.Router();
const fruits = require("../controllers/fruits")

router.get('/', fruits.index)
router.get("/genus", fruits.query)
router.get("/:name", fruits.name)

router.post("/", fruits.create)
router.patch("/:name", fruits.update)

router.delete("/nuke", fruits.nuke)
router.delete("/:name", fruits.remove)


module.exports = router