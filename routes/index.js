const router = require("express").Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Built with love by Ariela and Apri.");
});

/* RESOURCE quiz. */
router.use("/api/quiz", require("./quiz"));

/* RESOURCE jobsheet. */
router.use("/api/jobsheet", require("./jobsheet"));

module.exports = router;
