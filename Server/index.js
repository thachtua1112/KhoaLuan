const express = require("express");

const OrgStructureModel = require("./api/v1/models/Cat_OrgStructure.model");

const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const apiRouteV1 = require("./api/v1/routes");

const cors = require("cors");
const Cat_OrgStructureModel = require("./api/v1/models/Cat_OrgStructure.model");

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(cors());

const drawStructureTree = (listOrg, rootID, Tree = {}) => {
  Tree.data = {};
  Tree.children = [];

  const dataFind = listOrg.find((item) => rootID == item.ID);
  const childrenFilter = listOrg.filter((item) => rootID == item.ParentID);

  Tree.data = dataFind;

  if (childrenFilter.length <= 0) {
    Tree.children = null;
    return;
  }

  childrenFilter.forEach((item, index) => {
    Tree.children[index] = {};
    drawStructureTree(listOrg, item.ID, Tree.children[index]);
  });
  return Tree;
};

app.get("/structure", async (req, res) => {
  const listOrg = await Cat_OrgStructureModel.find();
  const listOrgStructure = listOrg.map((item) => {
    const { ID, OrgStructureName, ParentID } = item;
    return { ID, OrgStructureName, ParentID };
  });

  const Tree = drawStructureTree(
    listOrgStructure,
    "2D51E4D9-0E27-451F-83D8-04DA7D6B9797"
  );

  res.json(Tree);
});

app.use("/api/v1", apiRouteV1);
app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});

module.exports = app;
