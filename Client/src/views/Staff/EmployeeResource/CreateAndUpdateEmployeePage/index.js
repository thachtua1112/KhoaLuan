import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const CreateEmployeePage = (props) => {
  const classes = useStyles();

  return <div className={classes.root}>Create page</div>;
};
export default CreateEmployeePage;
