import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import PageviewIcon from "@material-ui/icons/Pageview";
import SettingsIcon from "@material-ui/icons/Settings";

import Toolbar from "@material-ui/core/Toolbar";
import { MTableToolbar } from "material-table";

import { Tooltip, IconButton } from "@material-ui/core";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { CSidebarNav } from "@coreui/react";
import DataTable from "../utils/DataTable";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}));

const TheContent = (props) => {
  const classes = useStyles();
  const { fields, OrgStructureSelected } = props;

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

  return (
    <CSidebarNav className={classes.root}>
      <DataTable
        title="Danh sách nhân viên"
        data={ListProfile}
        columns={fields}
        onSelectionChange={(rows) => setSelectedRow(rows)}
        actions={[
          {
            icon: SettingsIcon,
            tooltip: "Cài đặt hiển thị",
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row"),
          },
        ]}
        options={{
          paging: ListProfile.length > 20 ? true : false,
          filtering: true,
          pageSize: 20,
          paginationType: "stepped",
          tableLayout: "fixed",
          loadingType: "linear",
          selection: true,
          exportButton: true,
          doubleHorizontalScroll: true,
          rowStyle: (rowData) => ({
            backgroundColor: selectedRow.find(
              (element) => element.ID === rowData.ID
            )
              ? "#EEE"
              : "#FFF",
          }),
        }}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <div style={{ padding: "0px 10px" }}>
                <Toolbar>
                  <Tooltip title="Xem chi tiết hồ sơ">
                    <IconButton>
                      <PageviewIcon />
                    </IconButton>
                  </Tooltip>
                </Toolbar>
              </div>
            </div>
          ),
        }}
      />
    </CSidebarNav>
  );
};

export default TheContent;
