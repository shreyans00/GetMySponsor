const mongoose = require("mongoose");

const userCompanySchema = mongoose.Schema({
  poc_name: {
    type: String,
    required: true,
  },
  position: {
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
  company_name: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  LinkedIn: {
    type: String,
  },
  facebook: {
    type: String,
  },
});

const userCompany = mongoose.model("usercompany", userCompanySchema);

module.exports = userCompany;
