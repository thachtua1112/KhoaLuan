const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrgStructureTree = new Schema({
  ID: { type: Schema.Types.String },
  StructureTree: { type: Schema.Types.Mixed },
});

const Hre_ProfileModel = mongoose.model("OrgStructureTree", OrgStructureTree);

module.exports = OrgStructureTree;
