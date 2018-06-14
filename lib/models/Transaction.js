const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const TransactionSchema = new Schema({
  idTransaction: Number,
  name: String,
  attributesIn: [
    {
      nameIn: String,
      nameOut: String,
      path: String,
    },
  ],
  attributesOut: [
    {
      nameIn: String,
      nameOut: String,
      path: String,
    },
  ],
});

module.exports = Mongoose.model('Transaction', TransactionSchema);
