const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({  
  id: {
    type: Number
  },
  order:  {
    type: Array,
    required: true
  },
  txn:  {
    type: Array,
    required: true
  },
});

module.exports = mongoose.model("Orderdetails", OrderSchema);