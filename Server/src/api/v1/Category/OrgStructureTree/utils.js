function* draw(Root, List, Tree) {
  const indexRoot = List.findIndex(
    (OrgStructure) => OrgStructure.ID == Root.ID,
  );
  List.splice(indexRoot, 1);
  Tree.data = Root;
  Tree.children = [];
  const childrenList = List.filter(
    (OrgStructure) => OrgStructure.ParentID == Root.ID,
  );
  if (childrenList.length <= 0) {
    Tree.children = null;
  }
  for (let i = 0; i < childrenList.length; i++) {
    Tree.children[i] = {};
    yield* draw(childrenList[i], List, Tree.children[i]);
  }
  yield Root;
}

function* drawTree(Root, List, Tree) {
  yield* draw(Root, List, Tree);
}

module.exports.getTreeDraw = (Root, List) => {
  const Tree = {};
  const [...listOrgStructureTree] = drawTree(Root, List, Tree);
  return [Tree, listOrgStructureTree];
};
