const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SoonSchema = new Schema({
  code: {
      type: String,
    },
    name: {
        type: String,
        required: true,
      },
  slug: {
      type: String,
      required: true,
    },
  description: {
      type: String,
      required: true,
    },
  image: {
      type: Array,
      required: true,
    },
    image_original: {
      type: String,
      required: true,
    },
  gallery: {
      type: Array,
      required: false,
    },
  quantity: {
      type: String,
      required: true,
    },
  category: {
      type: String
    },
  price:  Number,
  unit: {
      type: String,
      required: true,
    },
  tag: {
      type: Array,
      required: false,
    },
  created_at: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: Number,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Soon", SoonSchema);