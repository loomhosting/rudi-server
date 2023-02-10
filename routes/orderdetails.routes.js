const router = require("express").Router();

const orderCTRL = require("../controllers/orderdetails.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", orderCTRL.getOrders);
router.get("/:orderId", orderCTRL.getOrder);
router.post("/", orderCTRL.createOrder);
router.put("/:orderId", orderCTRL.updateOrder);
router.delete("/:orderId", orderCTRL.deleteOrder);

module.exports = router;