const router = require("express").Router();

const cardCTRL = require("../controllers/card.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", cardCTRL.getCards);
router.get("/:cardId", cardCTRL.getCard);
router.post("/", cardCTRL.createCard);
router.put("/:cardId", cardCTRL.updateCard);
router.delete("/:cardId", cardCTRL.deleteCard);

module.exports = router;
