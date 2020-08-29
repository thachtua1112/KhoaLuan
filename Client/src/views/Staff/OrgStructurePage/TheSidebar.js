import React, { useState, useEffect } from "react";

import { Paper, FormControlLabel, Switch } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import OrgStructureTree from "./OrgStructureTree";

import OrgStructureAPI from "../../../api/cat_org_structure.api";

const TheSidebar = (props) => {
  const {
    StructureTree,
    setOrgStructureSelected,
    OrgStructureSelected,
  } = props;

  const [ListStructure, setListStructure] = useState([]);

  const fetchAPI = async () => {
    const result = await OrgStructureAPI.get({
      all: 1,
      fields: { Code: 1, ID: 1, OrgStructureName: 1 },
    });
    setListStructure(result.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
          options={ListStructure}
          getOptionLabel={(option) =>
            `${option.OrgStructureName}-${option.Code}`
          }
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
