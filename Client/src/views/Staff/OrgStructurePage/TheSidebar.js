import React, { useState, useEffect } from "react";

import { Paper, makeStyles } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import OrgStructureTree from "./OrgStructureTree";

import OrgStructureAPI from "../../../api/cat_org_structure.api";

const useStyles = makeStyles({
  root: {
    height: "98vh",
    fontWeight: 500,
  },
  search: {
    marginTop: "10px",
  },
});

const TheSidebar = (props) => {
  const classes = useStyles();

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
    <Paper variant="outlined" className={classes.root}>
      <CSidebarNav>
        <Autocomplete
          className={classes.search}
          elevation={0}
          disableClearable
          filterSelectedOptions
          autoHighlight
          options={ListStructure}
          getOptionLabel={(option) =>
            `${option.OrgStructureName} - ${option.Code}`
          }
          getOptionSelected={(option, value) => {
            return option.ID === value.ID;
          }}
          onChange={(event, item) => {
            setOrgStructureSelected(item.ID);
          }}
          fullWidth
          size="small"
          renderOption={(option) => {
            return `${option.OrgStructureName} - ${option.Code}`;
          }}
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
