const User = require("../model/userFest.js");

const registerUserFest = async (request, response) => {
  try {
    const userFest = {
      poc_name: request.body.poc_name,
      portfolio: request.body.portfolio,
      contact: request.body.contact,
      email: request.body.email,
      fest_name: request.body.fest_name,
      college: request.body.college,
      fest_details: request.body.fest_details,
      category: request.body.category,
    };

    const newUser = new User(userFest);
    await newUser.save();

    return response.status(200).json({ msg: "Fest Registration successful" });
  } catch (error) {
    return response
      .status(500)
      .json({ msg: "Error while registering fest in backend" });
  }
};

module.exports = registerUserFest;
