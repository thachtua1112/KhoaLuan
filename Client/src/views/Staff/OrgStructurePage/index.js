import React, { useState } from "react";

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
  const [structureTree, setStructureTree] = useState({});

  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={4} lg={3}>
        <Paper className={classes.paper}>
          <TheSidebar />
        </Paper>
      </Grid>

      <Grid item xs={8} lg={9}>
        <Paper className={classes.paper}>
          <TheContent />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OrgStructurePage;
