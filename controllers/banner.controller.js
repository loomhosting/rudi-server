const Banner = require("../models/Banner");

const CTRL = {};

CTRL.getBanners = (req, res) => {
  Banner.find({}).exec((err, banners) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({banners});
  });
};

CTRL.getBanner = (req, res) => {
  const { bannerId } = req.params;
  Banner.findById(bannerId).exec((err, banner) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({banner});
  });
};

CTRL.createBanner = (req, res) => {
  const newBanner = new Banner({
    name: req.body.name,
    image: req.body.image
  });

  newBanner.save((err, banner) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      banner,
    });
  });
};

CTRL.updateBanner = (req, res) => {
  const { bannerId } = req.params;
  
  Banner.findByIdAndUpdate(
    BannerId,
    req.body,
    { new: true },
    (err, banner) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        banner,
      });
    }
  );
};

CTRL.deleteBanner = (req, res) => {
  const { bannerId } = req.params;
  banner.findByIdAndRemove(bannerId, (err, banner) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      banner,
    });
  });
};

module.exports = CTRL;
