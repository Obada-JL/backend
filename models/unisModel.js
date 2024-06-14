const mongoose = require("mongoose");

const unisModel = new mongoose.Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  startApply: {
    type: String,
  },
  endApply: {
    type: String,
  },
  priceLink: {
    type: String,
  },
  applyLink: {
    type: String,
  },
});
module.exports = mongoose.model("opened-unis", unisModel);
