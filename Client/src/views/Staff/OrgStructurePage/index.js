import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TheSidebar from "./TheSidebar";
import TheContent from "./TheContent";

import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={5} lg={4}>
        <Paper className={classes.paper}>
          <TheSidebar
            StructureTree={StructureTree}
            setOrgStructureSelected={setOrgStructureSelected}
          />
        </Paper>
      </Grid>

      <Grid item xs={7} lg={8}>
        <Paper className={classes.paper}>
          <TheContent
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
  "selected",
  "StatusSyn",
  "ProfileName",
  "NameEnglish",
  "CodeEmp",
  "CodeAttendance",
  "DateHire",
  "DateEndProbation",
  "DateQuit",
  "ResignDescription",

  "OrgStructureID",
  "PositionID",
  "DateOfEffect",

  "WorkingPlace",
  "Supervisor",

  "Gender",
];
