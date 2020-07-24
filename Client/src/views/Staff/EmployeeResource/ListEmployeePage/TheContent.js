import React from "react";
import DataTable from "../../utils/DataTable";

import { makeStyles } from "@material-ui/core/styles";

import { CSidebarNav } from "@coreui/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "93vh",
  },
}));

const TheContent = (props) => {
  const { fields, data } = props;
  const classes = useStyles();

  const tableRef = React.createRef();

  return (
    <CSidebarNav className={classes.root}>
      <DataTable
        title="Danh sách nhân viên"
        tableRef={tableRef}
        columns={fields}
        options={{
          fixedColumns: {
            left: 1,
          },
        }}
        data={data}
      />
    </CSidebarNav>
  );
};

export default TheContent;
