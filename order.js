const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  pno: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);