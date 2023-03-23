const router = require("express").Router();

const soonCTRL = require("../controllers/soon.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", soonCTRL.getSoons);
router.get("/:soonId", soonCTRL.getSoon);
router.post("/", soonCTRL.createSoon);
router.put("/:soonId", soonCTRL.updateSoon);
router.delete("/:soonId", soonCTRL.deleteSoon);

module.exports = router;
