import React from "react";

import { Paper, FormControlLabel, Switch, Button } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import CachedIcon from "@material-ui/icons/Cached";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import OrgStructureTree from "./OrgStructureTree";

const getListOrg = (Tree, listOrg = []) => {
  if (null === Tree) return listOrg;
  if (null === Tree.children) {
    listOrg.push({
      ID: Tree.data.ID,
      OrgStructureName: Tree.data.OrgStructureName,
    });
    return listOrg;
  }
  Tree.children.forEach((item) => {
    getListOrg(item, listOrg);
  });
  return listOrg;
};

const TheSidebar = (props) => {
  const { StructureTree, setOrgStructureSelected } = props;

  let ListOrg = [];
  ListOrg = getListOrg(StructureTree);

  return (
    <Paper
      // elevation={0}
      style={{ height: "98vh" }}
    >
      <CSidebarNav>
        <Button color="secondary" endIcon={<CachedIcon />} size="small">
          Nạp lại dữ liệu
        </Button>

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
          options={ListOrg}
          getOptionLabel={(option) => option.OrgStructureName}
          //getOptionDisabled={(option) => option.year > 2000}
          onChange={(event, item) => console.log(item.ID)}
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

        <OrgStructureTree StructureTree={StructureTree} />
      </CSidebarNav>
    </Paper>
  );
};

export default TheSidebar;
