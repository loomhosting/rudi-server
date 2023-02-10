const router = require("express").Router();

const categoryCTRL = require("../controllers/category.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", categoryCTRL.getCategories);
router.get("/:categoryId", categoryCTRL.getCategory);
router.post("/", categoryCTRL.createCategory);
router.put("/:categoryId", categoryCTRL.updateCategory);
router.delete("/:categoryId", categoryCTRL.deleteCategory);

module.exports = router;
