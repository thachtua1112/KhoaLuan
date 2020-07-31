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
  const { fields, data, RowsSelected, setRowsSelected } = props;
  const handleClick = (item) => {
    if (item.ProfileID === RowsSelected.ProfileID) setRowsSelected({});
    else setRowsSelected(item);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CDataTable
        fields={fields}
        items={data}
        size="sm"
        pagination={data.length > 15 ? true : false}
        itemsPerPage={15}
        //onRowClick={handleClick}
      />
    </div>
  );
};
export default Content;
