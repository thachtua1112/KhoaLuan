import React, { useState, useEffect } from "react";

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
          <TheSidebar
            StructureTree={StructureTree}
            //setOrgStructureSelected={setOrgStructureSelected}
          />
        </Paper>
      </Grid>

      <Grid item xs={8} lg={9}>
        <Paper className={classes.paper}>
          <TheContent
            items={ListProfile}
            fields={["selected", "MaNV", "TenNV", "Phong ban"]}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OrgStructurePage;
