const Soon = require("../models/Soon");

const CTRL = {};

CTRL.getSoons = (req, res) => {
  Soon.find({})
    .exec((err, soons) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(soons);
    });
};

CTRL.getSoon = (req, res) => {
  const { soonId } = req.params;
  Soon.findById(soonId)
  //Soon.find({ category: soonId })
    .exec((err, soon) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(soon);
    });
};

CTRL.createSoon = (req, res) => {
  const newSoon = new Soon({
    code: req.body.code,
    name: req.body.name,
    slug: req.body.slug,
    description: req.body.description,
    image: req.body.image,
    image_original: req.body.image_original,
    gallery: req.body.gallery,
    quantity: req.body.quantity,
    category: req.body.category,
    price: req.body.price,
    unit: req.body.unit,
    tag: req.body.tag
  });

  newSoon.save((err, soon) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      soon,
    });
  });
};

CTRL.updateSoon = (req, res) => {
  const { soonId } = req.params;
  
  Soon.findByIdAndUpdate(
    soonId,
    req.body,
    { new: true },
    (err, soon) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        soon,
      });
    }
  );
};

CTRL.deleteSoon = (req, res) => {
  const { soonId } = req.params;
  Soon.findByIdAndRemove(soonId, (err, soon) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      soon,
    });
  });
};

module.exports = CTRL;
