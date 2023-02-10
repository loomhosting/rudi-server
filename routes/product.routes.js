const router = require("express").Router();

const productCTRL = require("../controllers/product.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", productCTRL.getProducts);
router.get("/:productId", productCTRL.getProduct);
router.post("/", productCTRL.createProduct);
router.put("/:productId", productCTRL.updateProduct);
router.delete("/:productId", productCTRL.deleteProduct);

module.exports = router;
