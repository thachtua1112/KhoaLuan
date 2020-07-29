const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

const apiRouteV1 = require("./api/v1/routes");
const { verifyToken } = require("./api/v1/controllers/verifyToken");
const loginRouter = require("./api/v1/routes/Login.router");
const RouterUser = require("./api/v1/routes/RouterUser");

//
const authenticationRoute = require("./api/v1/routes/authentication.route");
//

const cors = require("cors");
const routeExport = require("./api/v1/routes/routeExport");

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

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors());

app.use("/authentication", authenticationRoute);

app.use("/api/v1/user", loginRouter);
app.use("/api/v1/user", RouterUser);

//documents
/*
const pdf = require('html-pdf');
const pdfTemplate = require('./api/v1/ExportFile/documents/Contract');

app.post('/api/v1/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});


*/

app.use("/api/v1", apiRouteV1);
app.use("/api/v1", routeExport);
app.get("/api/v1/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});

module.exports = app;
