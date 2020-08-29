module.exports.drawTree = function* (Root, List, Tree) {
  const indexRoot = List.findIndex(
    (OrgStructure) => OrgStructure.ID == Root.ID,
  );
  List.splice(indexRoot, 1);
  Tree.data = Root;
  const childrenList = List.filter(
    (OrgStructure) => OrgStructure.ParentID == Root.ID,
  );
  if (childrenList.length <= 0) {
    Tree.children = null;
  }
  Tree.children = [];
  for (let i = 0; i < childrenList.length; i++) {
    Tree.children[i] = {};
    yield* this.drawTree(childrenList[i], List, Tree.children[i]);
  }
  yield Root;
};
