const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const Connection = require("./Database/db.js");
const Router = require("./Routes/route.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/register", Router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

const PORT = 8080;

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
