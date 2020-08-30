import React, { useState } from "react";

import { Grid, Paper, Tooltip } from "@material-ui/core";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";

import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content.Component";

import ProfileAPI from "../../../../api/hre_profile.api";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {},
  toolbar: {},
  content: {},
}));

const ListEmployeePage = (props) => {
  const classes = useStyles();

  const [Filter, setFilter] = useState({});
  const [RowSelected, setRowSelected] = useState({});
  const [ListProfile, setListProfile] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(1);
  const [Total, setTotal] = useState(0);

  const onSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  const fetchData = async (page = 1) => {
    try {
      const filters = { ...Filter };
      if (filters.ProfileName || filters.ProfileName === "") {
        filters.ProfileName = filters.ProfileName.trim();
        if (filters.ProfileName === "") {
          delete filters.ProfileName;
        }
      }

      setLoading(true);
      const result = await ProfileAPI.get({
        filters: filters,
        fields: {
          ID: 1,
          CodeEmp: 1,
          ProfileName: 1,
          DateHire: 1,
          Gender: 1,
          OrgStructureID: 1,
          OrgStructureName: 1,
          PositionID: 1,
          PositionName: 1,
          StatusSyn: 1,
        },
        page: page,
      });
      if (result.data) {
        const { data, meta } = result;
        const { totalDocuments, totalPages } = meta;
        setListProfile(data);
        setPerPage(totalPages);
        setTotal(totalDocuments);
        setLoading(false);
        return;
      }
      setListProfile([]);
      setLoading(false);
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
            CurrentPage={CurrentPage}
            setCurrentPage={setCurrentPage}
            fetchData={fetchData}
            Loading={Loading}
            PerPage={PerPage}
            totalDocuments={Total}
            scopedSlots={{
              ProfileName: (item) => {
                return (
                  <td>
                    {!item.ProfileName ? (
                      ""
                    ) : (
                      <Tooltip title="Xem chi tiết">
                        <Link
                          to={{
                            pathname: `/nhan-su/chi-tiet-nhan-vien/${item.ID}`,
                            state: { from: props.location },
                          }}
                        >
                          {item.ProfileName}
                        </Link>
                      </Tooltip>
                    )}
                  </td>
                );
              },
            }}
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
