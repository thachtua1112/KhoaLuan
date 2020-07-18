const orgStructureTree = { data: { ID: "call api" } };

const listUnit = ["call api"];

const initState = {
  showField: [],
  listUnit,
  orgStructureTree,
  unitSelected: orgStructureTree.data.ID,
  usersSelected: [],
};

const orgStructureReducer = (state = initState, action) => {
  return state;
};

export default orgStructureReducer;
