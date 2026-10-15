const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: { 
    type: Number,
    required: true,
    min: 0 
  }
});



module.exports = mongoose.model("user", HistorySchema);
