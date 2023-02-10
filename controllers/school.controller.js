const School = require("../models/School");

const CTRL = {};

CTRL.getSchools = (req, res) => {
  School.find({}).exec((err, schools) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({schools});

  });
};

CTRL.getSchool = (req, res) => {
  const { schoolId } = req.params;
  School.findById(schoolId).exec((err, school) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({schools});

  });
};

CTRL.createSchool = (req, res) => {
  const newSchool = new School({
    slug: req.body.slug,
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
  });

  newSchool.save((err, school) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      school,
    });
  });
};

CTRL.updateSchool = (req, res) => {
  const { schoolId } = req.params;
  
  School.findByIdAndUpdate(
    schoolId,
    req.body,
    { new: true },
    (err, school) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        school,
      });
    }
  );
};

CTRL.deleteSchool = (req, res) => {
  const { schoolId } = req.params;
  school.findByIdAndRemove(schoolId, (err, school) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      school,
    });
  });
};

module.exports = CTRL;
