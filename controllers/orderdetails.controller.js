const Order = require("../models/Orderdetails");

const CTRL = {};

CTRL.getOrders = (req, res) => {
  Order.find({})
    .populate("client")
    .populate("orderItems.product")
    .exec((err, orders) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(orders);
    });
};

CTRL.getOrder = (req, res) => {
  const { orderId } = req.params;
  Order.findById(orderId).exec((err, order) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(order);
  });
};


CTRL.createOrder = (req, res) => {
  const newOrder = new Order({
    orders: req.body.orders,
    txns: req.body.txns
  });


  newOrder.save((err, order) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      order,
    });
  });
};

CTRL.updateOrder = (req, res) => {
  const { orderId } = req.params;
  
  Product.findByIdAndUpdate(
    orderId,
    req.body,
    { new: true },
    (err, order) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        order,
      });
    }
  );
};

CTRL.deleteOrder = (req, res) => {
  const { orderId } = req.params;
  Order.findByIdAndRemove(orderId, (err, order) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      order,
    });
  });
};

module.exports = CTRL;
