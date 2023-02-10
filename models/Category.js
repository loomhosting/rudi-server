const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    default: false,
  },
  children: {
    type: Array,
  },
});

module.exports = mongoose.model("Category", CategorySchema);