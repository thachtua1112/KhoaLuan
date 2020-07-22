import React from "react";

import { Paper, FormControlLabel, Switch } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import OrgStructureTree from "./OrgStructureTree";

const getListOrg = (Tree, listOrg = []) => {
  if (null === Tree) return listOrg;
  if (!Tree.children) {
    listOrg.push({
      ID: Tree.data.ID,
      OrgStructureName: Tree.data.OrgStructureName,
    });
    return listOrg;
  }
  listOrg.push({
    ID: Tree.data.ID,
    OrgStructureName: Tree.data.OrgStructureName,
  });
  Tree.children.forEach((item) => {
    getListOrg(item, listOrg);
  });
  return listOrg;
};

const TheSidebar = (props) => {
  const {
    StructureTree,
    setOrgStructureSelected,
    OrgStructureSelected,
  } = props;

  let ListOrg = [];
  ListOrg = getListOrg(StructureTree);

  return (
    <Paper
      // elevation={0}
      style={{ height: "98vh" }}
    >
      <CSidebarNav>
        <FormControlLabel
          control={
            <Switch
              checked={true}
              // onChange={toggleChecked}
            />
          }
          labelPlacement="end"
          label="Hiển thị phòng ban ẩn"
        />
        <Autocomplete
          elevation={0}
          disableClearable
          filterSelectedOptions
          //ClearOnEscape
          autoHighlight
          options={ListOrg}
          getOptionLabel={(option) => option.OrgStructureName}
          //getOptionDisabled={(option) => option.....}
          getOptionSelected={(option, value) => option.ID === value.ID}
          onChange={(event, item) => {
            setOrgStructureSelected(item.ID);
          }}
          fullWidth
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tìm kiếm phòng ban"
              variant="outlined"
            />
          )}
        />

        <OrgStructureTree
          StructureTree={StructureTree}
          OrgStructureSelected={OrgStructureSelected}
          setOrgStructureSelected={setOrgStructureSelected}
        />
      </CSidebarNav>
    </Paper>
  );
};

export default TheSidebar;
