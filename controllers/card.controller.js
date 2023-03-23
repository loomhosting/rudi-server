const Card = require("../models/Card");

const CTRL = {};

CTRL.getCards = (req, res) => {
  Card.find({}).exec((err, data) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({data});
  });
};

CTRL.getCard = (req, res) => {
  const { cardId } = req.params;
  Card.findById(cardId).exec((err, card) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({card});
  });
};

CTRL.createCard = (req, res) => {
  const newCard = new Card({
    id: req.body.id,
    name: req.body.name,
    slug: req.body.slug,
    image: req.body.image,
    icon: req.body.icon,
    children: req.body.children
  });

  newCard.save((err, card) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      card,
    });
  });
};

CTRL.updateCard = (req, res) => {
  const { cardId } = req.params;  
  
  Card.findByIdAndUpdate(
    cardId,
    req.body,
    { new: true },
    (err, card) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        card,
      });
    }
  );
};

CTRL.deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndRemove(cardId, (err, card) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      card,
    });
  });
};

module.exports = CTRL;