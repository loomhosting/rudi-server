const { Number } = require("mongoose");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TxnSchema = new Schema({
tx_ref: {
    type: Number,
    required: true,
  },
amount: {
    type: String,
    required: true,
  },
charged_amount: {
    type: Number,
    required: true,
  },
name: {
    type: String,
    required: true,
  },
email: {
    type: String,
    required: true,
  },
phone_number: {
    type: Number,
    required: true,
  },
type: {
    type: String,
    required: false,
  },
created_at: {
    type: String,
    required: true,
  },
app_fee: {
    type: String,
    required: true,
  },
payment_type: {
    type: String,
    required: true,
  },
amount_settled: {
    type: Number,
    required: true,
  },
currency: {
    type: String,
    required: true,
  },
address: {
    type: String,
    required: true,
  },
status: {
    type: String,
    required: true,
  },
orders: {
  type: String,
  required: false,
},
});

module.exports = mongoose.model("Txn", TxnSchema);