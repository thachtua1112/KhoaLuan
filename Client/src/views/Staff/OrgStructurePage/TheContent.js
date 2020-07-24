import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import SearchIcon from "@material-ui/icons/Search";

import Toolbar from "@material-ui/core/Toolbar";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { CSidebarNav } from "@coreui/react";
import DataTable from "../utils/DataTable";

import { MTableToolbar } from "material-table";

import { Tooltip, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "89vh",
  },
}));

const TheContent = (props) => {
  const classes = useStyles();
  const {
    fields,
    OrgStructureSelected,
    //setEmployeeSelected,
    //EmployeeSelected,
  } = props;

  const [ListProfile, setListProfile] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  useEffect(() => {
    if (null === OrgStructureSelected) return;
    OrgStructureAPI.getListProfile(OrgStructureSelected.ID)
      .then((resListProfile) => {
        setListProfile(resListProfile.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [OrgStructureSelected]);

  // const selectEmployee = (employee) => {
  //   if (employee === EmployeeSelected) setEmployeeSelected(null);
  //   else setEmployeeSelected(employee);
  // };

  return (
<<<<<<< HEAD
    <Paper style={{ height: "89vh" }}>
      <CSidebarNav>
        <CDataTable
          size="sm"
          pagination={ListProfile.length > 15 ? true : false}
          itemsPerPage={15}
          items={ListProfile}
          fields={fields}
          striped
          bordered
          clickableRows
          hover
          scopedSlots={scopedSlots}
          onRowClick={(item) => selectEmployee(item)}
        />
      </CSidebarNav>
    </Paper>
=======
    <CSidebarNav className={classes.root}>
      <DataTable
        title="Danh sách nhân viên"
        options={{
          paging: true,
          selection: true,
          exportButton: true,
          pageSize: 20,
          doubleHorizontalScroll: true,
          rowStyle: (rowData) => ({
            backgroundColor: selectedRow.find(
              (element) => element.ID === rowData.ID
            )
              ? "#EEE"
              : "#FFF",
          }),
        }}
        onSelectionChange={(rows) => setSelectedRow(rows)}
        data={ListProfile}
        columns={fields}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <div style={{ padding: "0px 10px" }}>
                <Toolbar>
                  <Tooltip title="Xem">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Cập nhật">
                    <IconButton>
                      <CreateIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Xóa">
                    <IconButton>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Tooltip>
                </Toolbar>
              </div>
            </div>
          ),
        }}
      />
    </CSidebarNav>
>>>>>>> 1be4d8d2101ac668cd748827db7acd89b8b18db5
  );
};

export default TheContent;
