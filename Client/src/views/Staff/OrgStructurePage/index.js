import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { CHeaderNav, CHeaderNavItem } from "@coreui/react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TheSidebar from "./TheSidebar";
import TheContent from "./TheContent";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const history = useHistory();
  const [EmployeeSelected, setEmployeeSelected] = useState(null);

  const [OrgStructureSelected, setOrgStructureSelected] = useState(null);
  const [StructureTree, setStructureTree] = useState(null);

  useEffect(() => {
    OrgStructureAPI.getStructureTree()
      .then((resStructureTree) => {
        setStructureTree(resStructureTree.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const detailEmployee = () => {
    history.push(`/nhan-su/chi-tiet-nhan-vien/${EmployeeSelected.CodeEmp}`);
  };

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={5} lg={4}>
        <Paper className={classes.paper}>
          <TheSidebar
            StructureTree={StructureTree}
            setOrgStructureSelected={setOrgStructureSelected}
            OrgStructureSelected={OrgStructureSelected}
          />
        </Paper>
      </Grid>

      <Grid item xs={7} lg={8}>
        <Paper className={classes.paper}>
          <Grid container style={{ height: "10" }}>
            <Grid xs={6}>
              <CHeaderNav className="d-md-down-none mr-auto">
                <CHeaderNavItem className="px-3">
                  {`Danh sách nhân viên`}
                </CHeaderNavItem>
              </CHeaderNav>
            </Grid>
            <Grid xs={6}>
              <CHeaderNav className="px-3">
                <CHeaderNavItem className="px-7">{`Nhân viên : ${
                  !EmployeeSelected ? "" : EmployeeSelected.ProfileName
                }`}</CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                  <Button
                    disabled={!EmployeeSelected ? true : false}
                    onClick={detailEmployee}
                  >
                    Xem chi tiết
                  </Button>
                </CHeaderNavItem>
              </CHeaderNav>{" "}
            </Grid>
          </Grid>
          <TheContent
            setEmployeeSelected={setEmployeeSelected}
            EmployeeSelected={EmployeeSelected}
            fields={fields}
            OrgStructureSelected={OrgStructureSelected}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OrgStructurePage;

const fields = [
  "StatusSyn",
  "CodeEmp",
  "ProfileName",
  "NameEnglish",
  "Gender",
  "OrgStructureID",
  "PositionID",
  "CodeAttendance",
  "DateHire",
  "DateOfEffect",
  "DateEndProbation",
  "DateQuit",
];
