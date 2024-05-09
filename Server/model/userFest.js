const mongoose = require("mongoose");

const userFestSchema = mongoose.Schema({
  poc_name: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fest_name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  fest_details: {
    type: String,
  },
  category: {
    type: String,
  },
});

const userFest = mongoose.model("userfest", userFestSchema);

module.exports = userFest;
