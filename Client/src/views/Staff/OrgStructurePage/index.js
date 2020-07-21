import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TheSidebar from "./TheSidebar";
import TheContent from "./TheContent";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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
  const [ListProfile, setListProfile] = useState([]);
  const [OrgStructureSelected, setOrgStructureSelected] = useState(null);
  const [StructureTree, setStructureTree] = useState(null);

  useEffect(() => {
    OrgStructureAPI.getListProfile(OrgStructureSelected)
      .then((resListProfile) => {
        OrgStructureAPI.getStructureTree()
          .then((resStructureTree) => {
            setListProfile(resListProfile.data);
            setStructureTree(resStructureTree.data);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={4} lg={3}>
        <Paper className={classes.paper}>
          <Button
            onClick={() =>
              setOrgStructureSelected("35125607-3E52-4FC9-8B92-AF0EA8704B57")
            }
          >
            LICK
          </Button>
          <TheSidebar
            StructureTree={StructureTree}
            setOrgStructureSelected={setOrgStructureSelected}
          />
        </Paper>
      </Grid>

      <Grid item xs={8} lg={9}>
        <Paper className={classes.paper}>
          <TheContent items={ListProfile} fields={fields} />
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
