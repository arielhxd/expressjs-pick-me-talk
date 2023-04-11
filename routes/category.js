const router = require("express").Router();
const categoryController = require("../controllers/category");

/* GET category listing. */
router.get("/", categoryController.index);

/* POST category listing. */
router.post("/store", categoryController.store);

/* GET spesific category listing. */
router.get("/:id", categoryController.show);

/* PUT spesific category listing. */
router.put("/:id", categoryController.update);

/* DELETE spesific category listing. */
router.delete("/:id", categoryController.destroy);

module.exports = router;
