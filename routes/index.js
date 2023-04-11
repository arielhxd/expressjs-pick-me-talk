const router = require("express").Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Built with love by Ariela Cans");
});

/* RESOURCE quiz. */
router.use("/api/quiz", require("./quiz"));

/* RESOURCE category. */
router.use("/api/category", require("./category"));

module.exports = router;
