import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: "4px",
    },
  },
}));

const Tool = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      Tool
    </Grid>
  );
};

export default Tool;
