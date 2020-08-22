import React, { useState } from "react";

import TimeKeepingAPI from "../../../callAPI/TimeKeeping.api";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper, CircularProgress, Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";
import CIcon from "@coreui/icons-react";
import { cilBan } from "@coreui/icons";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";
import Content from "./Content.Component";
import NewAndDetail from "./NewAndDetail.Component";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //height: "100vh" ,
   // paddingLeft: theme.spacing(1)
  },
  search: {  },
  toolbar: {
   
    //marginBottom: "0px",
    marginTop: "4px",
  },
  content: { height: "75vh" },
}));

const noItemView=()=>{
  return (
    <div className="text-center my-5">
    <h2>
      { "Không có dữ liệu" }
      <CIcon
        width="30"
        name="cilBan"
        content={cilBan}
        className="text-danger mb-2"
      />
    </h2>
  </div>)
}

const Loading=()=>{
  return (
    <div className="text-center my-5">
    <h2>
      { "Đang tải dữ liệu" }
      <CircularProgress />
    </h2>
  </div>)
}
 
 


const TimeKeepingDayPage = () => {
  const classes = useStyles();

  const [Filter, setFilter] = useState({})

  const [RowsSelected, setRowsSelected] = useState([])

  const [ListDataTimeKeeping, setListDataTimeKeeping] = useState([]);

  const [noItem, setnoItem] = useState(noItemView)

  const [Option, setOption] = useState(null)

  const [ConfimDelete, setConfimDelete] = useState(false)

  const searchDataTimeKeeping = async () => {
    setnoItem(Loading)
    setListDataTimeKeeping([])
    setRowsSelected([])
    const res = await TimeKeepingAPI.getDataTimeKeeping(Filter);
    setListDataTimeKeeping(res.data.data);
    setnoItem(noItemView)
  };


  const reload=async()=>{
    const res = await TimeKeepingAPI.getDataTimeKeeping(Filter);
    setListDataTimeKeeping(res.data.data);
  }

    const onDelete= async()=>{
      await TimeKeepingAPI.deleteX(RowsSelected[0]._id)
      setRowsSelected([])
      setConfimDelete(false)
      reload()
    }
    const onCalculateTimeKeeping= async()=>{
    const listCalculate= RowsSelected.filter(item=>{
     return "DA_TINH_CONG"!==item.Status
    })
    await TimeKeepingAPI.calculateTimeKeeping({listCalculate:listCalculate.map(item=>item._id)})
    setRowsSelected(RowsSelected.filter(item=>item.Status==="DA_TINH_CONG"))
    reload()
  }



  


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.search}>
        {!Option?null: <NewAndDetail document={"update"!==Option?null:RowsSelected[0]} option={Option} show={setOption} />}
          {
            <Search
            Filter={Filter}
            setFilter={setFilter}           
            />
          }
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.toolbar} variant="outlined">
          <ToolBar setConfimDelete={setConfimDelete} show={setOption} onCalculateTimeKeeping={onCalculateTimeKeeping} RowsSelected={RowsSelected} searchDataTimeKeeping={searchDataTimeKeeping} />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.content}>     
            <Content noItem={noItem} fields={fields} RowsSelected={RowsSelected} setRowsSelected={setRowsSelected} data={ListDataTimeKeeping} />
        </Paper>
      </Grid>
      <Dialog
      open={ConfimDelete}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
      <DialogTitle >XAC NHAN XOA</DialogTitle>
       <DialogActions>
          <Button 
          onClick={()=>setConfimDelete(false)}
           color="primary">
            Khong
          </Button>
          <Button
           onClick={onDelete} 
           color="primary" autoFocus>
            Co
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default TimeKeepingDayPage;

const fields = [
  //{ _style: { width: "250px" }, key: "ProfileID", label: "ProfileID" },
  { _style: { width: "150px" }, key: "DateKeeping", label: "Ngày" },
  {
    _style: { width: "150px" },
    key: "Status",
    label: "Trạng thái",
  },
  { _style: { width: "100px" }, key: "TimeIn", label: "Giờ vào" },
  { _style: { width: "100px" }, key: "TimeOut", label: "Giờ ra" },
  
  { _style: { width: "120px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
  {
    _style: { width: "300px" },
    key: "OrgStructureName",
    label: "Phòng ban",
  },
 
  {
    _style: { width: "100px" },
    key: "TotalHours",
    label: "Giờ công",
  },
  { _style: { width: "100px" }, key: "TotalDay", label: "Ngày công" },
  
  {
    _style: { width: "250px" },
    key: "TimeKeepingType",
    label: "Loại chấm công",
  },
 
  { _style: { width: "250px" }, key: "Description ", label: "Ghi chú" },
];
