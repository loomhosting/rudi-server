const Product = require("../models/Product");

const CTRL = {};

CTRL.getProducts = (req, res) => {
  Product.find({})
    .exec((err, products) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(products);
    });
};

CTRL.getProduct = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId)
  //Product.find({ category: productId })
    .exec((err, product) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(product);
    });
};

CTRL.createProduct = (req, res) => {
  const newProduct = new Product({
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

  newProduct.save((err, product) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      product,
    });
  });
};

CTRL.updateProduct = (req, res) => {
  const { productId } = req.params;
  
  Product.findByIdAndUpdate(
    productId,
    req.body,
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        product,
      });
    }
  );
};

CTRL.deleteProduct = (req, res) => {
  const { productId } = req.params;
  Product.findByIdAndRemove(productId, (err, product) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      product,
    });
  });
};

module.exports = CTRL;
