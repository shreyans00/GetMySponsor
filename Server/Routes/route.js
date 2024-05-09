const express = require("express");
const router = express.Router();

const registerUserCompany = require("../Controller/userCompany-controller.js");
const registerUserFest = require("../Controller/userFest-controller.js");

router.post("/registerFest", registerUserFest);
router.post("/registerCompany", registerUserCompany);

module.exports = router;
