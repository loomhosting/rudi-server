const router = require("express").Router();

const bannerCTRL = require("../controllers/banner.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", bannerCTRL.getBanners);
router.get("/:bannerId", bannerCTRL.getBanner);
router.post("/", bannerCTRL.createBanner);
router.put("/:bannerId", bannerCTRL.updateBanner);
router.delete("/:bannerId", bannerCTRL.deleteBanner);

module.exports = router;
