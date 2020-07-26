import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { defaultProfileFields } from "../utils/fieldsProfile";

import { CDataTable, CSidebarNav } from "@coreui/react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Tooltip from "@material-ui/core/Tooltip";

import SaveAltIcon from "@material-ui/icons/SaveAlt";

import { CSVLink } from "react-csv";

import TheSidebar from "./TheSidebar";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& table": {
      "table-layout": "fixed",
    },
  },
  paper: {
    padding: theme.spacing(1),
    //textAlign: "center",
    height: "100vh",
    color: theme.palette.text.secondary,
  },
}));

const OrgStructurePage = () => {
  const classes = useStyles();

  const [ListProfile, setListProfile] = useState([]);

  const [OrgStructureSelected, setOrgStructureSelected] = useState(null);

  const [StructureTree, setStructureTree] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickExport = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseExport = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    OrgStructureAPI.getStructureTree()
      .then((resStructureTree) => {
        setStructureTree(resStructureTree.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    if (!OrgStructureSelected) return;
    const fetchAPI = async () => {
      const res = await OrgStructureAPI.getListProfile(OrgStructureSelected);
      setListProfile(res.data);
    };
    fetchAPI();
  }, [OrgStructureSelected]);

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={4} lg={3}>
        <Paper className={classes.paper}>
          <TheSidebar
            StructureTree={StructureTree}
            setOrgStructureSelected={setOrgStructureSelected}
            OrgStructureSelected={OrgStructureSelected}
          />
        </Paper>
      </Grid>

      <Grid item xs={8} lg={9}>
        <Paper className={classes.paper}>
          <Tooltip title="Export">
            <IconButton onClick={handleClickExport}>
              <SaveAltIcon />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseExport}
          >
            <MenuItem onClick={handleCloseExport}>
              <CSVLink
                data={ListProfile}
                headers={defaultProfileFields}
                filename={"DSNhanVien.csv"}
              >
                Export as CSV
              </CSVLink>
            </MenuItem>
            <MenuItem onClick={handleCloseExport}>
              Export as PDF chua lam
            </MenuItem>
          </Menu>

          <CSidebarNav>
            <CDataTable
              fields={defaultProfileFields}
              items={ListProfile}
              pagination={ListProfile.length > 15 ? true : false}
              itemsPerPage={15}
            />
          </CSidebarNav>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OrgStructurePage;
