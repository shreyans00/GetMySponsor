const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const Connection = require("./Database/db.js");
const Router = require("./Routes/route.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/register", Router);

// website can be visible with backend port as well with these codes
app.use(express.json());
const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../Client/build");
app.use(express.static(buildpath));
app.use(
  cors({
    origin: "*",
  })
);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
