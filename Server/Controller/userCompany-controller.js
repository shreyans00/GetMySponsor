const User = require("../model/userCompany.js");

const registerUserCompany = async (request, response) => {
  try {
    const userCompany = {
      poc_name: request.body.poc_name,
      position: request.body.position,
      contact: request.body.contact,
      email: request.body.email,
      company_name: request.body.company_name,
      industry: request.body.industry,
      LinkedIn: request.body.LinkedIn,
      facebook: request.body.facebook,
    };

    const newUser = new User(userCompany);
    await newUser.save();

    return response
      .status(200)
      .json({ msg: "Company's Registration successfull" });
  } catch (error) {
    return response
      .status(500)
      .json({ msg: "Error while registering company in backend" });
  }
};

module.exports = registerUserCompany;
