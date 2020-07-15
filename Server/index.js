const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/HRM";

const db = mongoose.connection;

mongoose.connect(DB_URL).then(() => console.log("DB Connected!"));
db.on("error", (err) => {
  console.log("DB connection error:", err.message);
});

app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});

module.exports = app;
