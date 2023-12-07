const express = require("express");
const router = express.Router();

router.get("/landing", async (req, res) => {
  res.render("landing");
});

module.exports = router;
