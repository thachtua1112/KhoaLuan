import React, { useState } from "react";

import { Grid, Paper, CircularProgress } from "@material-ui/core";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";

import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content.Component";

import ProfileAPI from "../../../../callAPI/Profile.api";
import CIcon from "@coreui/icons-react";
import { cilBan } from "@coreui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {},
  toolbar: {},
  content: {},
}));

const noItemView = () => {
  return (
    <div className="text-center my-5">
      <h2>
        {"Không có dữ liệu"}
        <CIcon
          width="30"
          name="cilBan"
          content={cilBan}
          className="text-danger mb-2"
        />
      </h2>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="text-center my-5">
      <h2>
        {"Đang tải dữ liệu"}
        <CircularProgress />
      </h2>
    </div>
  );
};

const ListEmployeePage = (props) => {
  const classes = useStyles();

  const [Filter, setFilter] = useState({});
  const [RowSelected, setRowSelected] = useState({});
  const [ListProfile, setListProfile] = useState([]);
  const [noItem, setnoItem] = useState(noItemView);

  const onSearch = async () => {
    try {
      setnoItem(Loading);
      setListProfile([]);
      setRowSelected({});
      const res = await ProfileAPI.getProfiles(Filter);
      setListProfile(res.data);
      setnoItem(noItemView);
    } catch (error) {
      console.log("DanhSachNhanVien ProfileAPI ERR", error);
    }
  };

  return (
    <Grid className={classes.root}>
      <Grid item>
        <Paper variant="outlined" className={classes.search}>
          <Search Filter={Filter} setFilter={setFilter} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.toolbar}>
          <ToolBar onSearch={onSearch} RowSelected={RowSelected} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.content}>
          <Content
            data={ListProfile}
            fields={defaultProfileFields}
            RowSelected={RowSelected}
            setRowSelected={setRowSelected}
            noItem={noItem}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ListEmployeePage;

const defaultProfileFields = [
  { _style: { width: "150px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
  { _style: { width: "150px" }, key: "DateHire", label: "Ngày vào làm" },
  { _style: { width: "100px" }, key: "Gender", label: "Giới tính" },
  {
    _style: { width: "300px" },
    key: "OrgStructureName",

    label: "Phòng ban",
  },
  { _style: { width: "150px" }, key: "PositionName", label: "Chức vụ" },
  { _style: { width: "100px" }, key: "StatusSyn", label: "Trạng thái" },
];
