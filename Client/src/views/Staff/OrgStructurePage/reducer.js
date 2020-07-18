const orgStructureTree = { data: { ID: "call api" } };

const initState = {
  showField: [],
  orgStructureTree,
  unitSelected: orgStructureTree.data.ID,
  usersSelected: [],
};

const orgStructureReducer = (state = initState, action) => {
  return state;
};

export default orgStructureReducer;
