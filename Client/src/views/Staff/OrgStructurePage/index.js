import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { defaultProfileFields } from "../utils/fieldsProfile";
import { exportToPDF } from "../utils/exportToPDF";

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
    //height: "100vh",
  },
  paper: {
    padding: theme.spacing(1),
    //textAlign: "center",
    height: "88vh",
    color: theme.palette.text.secondary,
  },

  sidebar: {
    padding: theme.spacing(1),
    //textAlign: "center",
    height: "100vh",
    color: theme.palette.text.secondary,
  },

  tool: {
    padding: theme.spacing(1),
    //textAlign: "center",
    height: "12vh",
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

  const exportPDF = () => {
    exportToPDF(
      "Danh sach nhan vien",
      defaultProfileFields,
      ListProfile,
      "DSNhanVien"
    );
    handleCloseExport();
  };

  const handleCloseExport = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    OrgStructureAPI.getStructureTree()
      .then((resStructureTree) => {
        setStructureTree(resStructureTree.data.StructureTree);
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
        <Paper className={classes.sidebar}>
          <TheSidebar
            StructureTree={StructureTree}
            setOrgStructureSelected={setOrgStructureSelected}
            OrgStructureSelected={OrgStructureSelected}
          />
        </Paper>
      </Grid>

      <Grid item xs={8} lg={9}>
        <Grid item xs={12}>
          <Paper className={classes.tool}>
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
              <MenuItem
                onClick={(event) => {
                  exportPDF();
                }}
              >
                <CSVLink
                  data={ListProfile}
                  headers={defaultProfileFields}
                  filename={"DSNhanVien.csv"}
                >
                  Export as CSV
                </CSVLink>
              </MenuItem>
              <MenuItem onClick={exportPDF}>Export as PDF</MenuItem>
            </Menu>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
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
    </Grid>
  );
};

export default OrgStructurePage;
