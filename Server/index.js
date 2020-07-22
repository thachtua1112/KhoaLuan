const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const apiRouteV1 = require("./api/v1/routes");
const {verifyToken} = require('./api/v1/controllers/verifyToken');
const loginRouter = require("./api/v1/routes/Login.router");
const RouterUser = require("./api/v1/routes/RouterUser");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/HRM";

const db = mongoose.connection;
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log("DB Connected!"));
db.on("error", (err) => {
  console.log("DB connection error:", err.message);
});

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use("/api/v1/user",loginRouter);
app.use("/api/v1/user",verifyToken,RouterUser)
app.use("/api/v1", apiRouteV1);
app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});

module.exports = app;
