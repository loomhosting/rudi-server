const router = require("express").Router();

const schoolCTRL = require("../controllers/school.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", schoolCTRL.getSchools);
router.get("/:schoolId", schoolCTRL.getSchool);
router.post("/", schoolCTRL.createSchool);
router.put("/:schoolId", schoolCTRL.updateSchool);
router.delete("/:schoolId", schoolCTRL.deleteSchool);

module.exports = router;
