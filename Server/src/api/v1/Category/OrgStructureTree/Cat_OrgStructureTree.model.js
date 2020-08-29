const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrgStructureTree = new Schema(
  {
    isRoot: { type: Schema.Types.Boolean },
    rootID: { type: Schema.Types.String },
    listID: { type: Schema.Types.Array },
    StructureTree: Object,
  },
  { timestamps: true },
);

const OrgStructureTreeModel = mongoose.model(
  "Cat_OrgStructureTreeT",
  OrgStructureTree,
);

module.exports = OrgStructureTreeModel;
