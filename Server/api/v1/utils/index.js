module.exports.drawStructureTree = (
  listOrg,
  rootID = "2D51E4D9-0E27-451F-83D8-04DA7D6B9797",
  Tree = {}
) => {
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
    this.drawStructureTree(listOrg, item.ID, Tree.children[index]);
  });
  return Tree;
};

module.exports.getListStructure = (Tree, listUnit = []) => {
  if (null == Tree.children) {
    listUnit.push(Tree.data.ID);
    return;
  }
  Tree.children.forEach((item) => {
    this.getListUnit(item, listUnit);
  });
  return listUnit;
};
