import React from "react";

import { CDataTable } from "@coreui/react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& table": {
      "table-layout": "fixed",
    },
  },
}));

const Content = (props) => {
  const classes = useStyles();
  const {
    fields,
    data,
    //RowsSelected, setRowsSelected
  } = props;
  return (
    <div className={classes.root}>
      <CDataTable fields={fields} items={data} />
    </div>
  );
};
export default Content;
