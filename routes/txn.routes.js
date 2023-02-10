const router = require("express").Router();

const txnCTRL = require("../controllers/txn.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", txnCTRL.getTxns);
router.get("/:txnId", txnCTRL.getTxn);
router.post("/", txnCTRL.createTxn);
router.put("/:txnId", txnCTRL.updateTxn);
router.delete("/:txnId", txnCTRL.deleteTxn);

module.exports = router;
