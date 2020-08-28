import React, { useEffect, useState } from "react";

import { exportToPDF } from "../utils/exportToPDF";

import SaveAltIcon from "@material-ui/icons/SaveAlt";

import {  CSidebarNav } from "@coreui/react";

import { CSVLink } from "react-csv";

import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Grid,
  Tooltip,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import TheSidebar from "./TheSidebar";

import Table from "../../../share/component/Table.component";

import OrgStructureAPI from "../../../callAPI/Cat_OrgStructure.api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // "& table": {
    //   "table-layout": "fixed",
    // },
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

  const [Loading, setLoading] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(10);

  const [ListProfile, setListProfile] = useState([]);

  const [OrgStructureSelected, setOrgStructureSelected] = useState(null);

  const [StructureTree, setStructureTree] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickExport = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const exportPDF = () => {
    exportToPDF("Danh sach nhan vien", fields, ListProfile, "DSNhanVien");
    handleCloseExport();
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
      setLoading(true);
      const res = await OrgStructureAPI.getListProfile(OrgStructureSelected);
      setListProfile(res.data);
      setLoading(false);
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
              <MenuItem>
                <CSVLink
                  data={ListProfile}
                  headers={fields}
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
              <Table
                items={ListProfile}
                fields={fields}
                currentPage={CurrentPage}
                onPageChange={(i) => setCurrentPage(i)}
                isLoading={Loading}
                scopedSlots={{
                  Position: (item) => {
                    return (
                      <td>
                        {!item.Position ? "" : item.Position.PositionName}
                      </td>
                    );
                  },
                  OrgStructure: (item) => {
                    return (
                      <td>
                        {!item.OrgStructure
                          ? ""
                          : `${item.OrgStructure.Code}-${item.OrgStructure.OrgStructureName}`}
                      </td>
                    );
                  },
                }}
                perPage={PerPage}
              />
              {/* <CDataTable
                fields={fields}
                items={ListProfile}
                pagination={ListProfile.length > 15 ? true : false}
                itemsPerPage={15}
                scopedSlots={{
                  Position: (item) => {
                    return (
                      <td>
                        {!item.Position ? "" : item.Position.PositionName}
                      </td>
                    );
                  },
                  OrgStructure: (item) => {
                    return (
                      <td>
                        {!item.OrgStructure
                          ? ""
                          : `${item.OrgStructure.Code}-${item.OrgStructure.OrgStructureName}`}
                      </td>
                    );
                  },
                }}
              /> */}
            </CSidebarNav>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrgStructurePage;

const fields = [
  { _style: { width: "150px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
  {
    _style: { width: "300px" },
    key: "OrgStructure",

    label: "Phòng ban",
  },
  { _style: { width: "150px" }, key: "Position", label: "Chức vụ" },
];
