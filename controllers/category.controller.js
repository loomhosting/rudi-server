const Category = require("../models/Category");

const CTRL = {};

CTRL.getCategories = (req, res) => {
  Category.find({}).exec((err, data) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({data});
  });
};

CTRL.getCategory = (req, res) => {
  const { categoryId } = req.params;
  Category.findById(categoryId).exec((err, category) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({category});
  });
};

CTRL.createCategory = (req, res) => {
  const newCategory = new Category({
    id: req.body.id,
    name: req.body.name,
    slug: req.body.slug,
    image: req.body.image,
    icon: req.body.icon,
    children: req.body.children
  });

  newCategory.save((err, category) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      category,
    });
  });
};

CTRL.updateCategory = (req, res) => {
  const { categoryId } = req.params;  
  
  Category.findByIdAndUpdate(
    categoryId,
    req.body,
    { new: true },
    (err, category) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        category,
      });
    }
  );
};

CTRL.deleteCategory = (req, res) => {
  const { categoryId } = req.params;

  Category.findByIdAndRemove(categoryId, (err, category) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      category,
    });
  });
};

module.exports = CTRL;