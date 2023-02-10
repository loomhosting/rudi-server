const Txn = require("../models/txn");

const CTRL = {};

CTRL.getTxns = (req, res) => {
  Txn.find({})
    .exec((err, txns) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(txns);
    });
};

CTRL.getTxn = (req, res) => {
  const { txnId } = req.params;
  Txn.findById(txnId)
    .exec((err, txn) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(txn);
    });
};

CTRL.createTxn = (req, res) => {
  const newTxn = new Txn({
    tx_ref: req.body.tx_ref,
    amount: req.body.amount,
    charged_amount: req.body.charged_amount,
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    type: req.body.type,
    created_at: req.body.created_at,
    app_fee: req.body.app_fee,
    payment_type: req.body.payment_type,
    amount_settled: req.body.amount_settled,
    currency: req.body.currency,
    address: req.body.address,
    status: req.body.status,
    orders: req.body.orders,
  });

  newTxn.save((err, txn) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      txn,
    });
  });
};

CTRL.updateTxn = (req, res) => {
  const { txnId } = req.params;
  
  Txn.findByIdAndUpdate(
    txnId,
    req.body,
    { new: true },
    (err, txn) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        txn,
      });
    }
  );
};

CTRL.deleteTxn = (req, res) => {
  const { txnId } = req.params;
  Txn.findByIdAndRemove(txnId, (err, txn) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      txn,
    });
  });
};

module.exports = CTRL;
