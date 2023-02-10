const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({  
  id: {
    type: Number
  },
  items:  {
    type: Array,
    required: false
  },
  amount:  {
    type: Number,
    required: false
  },
  client:  {
    type: Array,
    required: false
  }, 
  status:  {
    type: String,
    required: false
  },  
  totalUniqueItems: {
    type: Number,
    required: false
  },
  total: {
    type: Number,
    required: false
  },
  orderid: {
    type: Number,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
},
{
ref: {
  type: String,
  required: false
}
});

module.exports = mongoose.model("Order", OrderSchema);