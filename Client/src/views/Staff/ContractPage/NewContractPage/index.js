
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
//import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { CInput, CSelect } from '@coreui/react';
const columns = [
  { id: 'name', label: 'Tên khoản phụ cấp',  align: 'center',minWidth: 170 },
  {
    id: 'population',
    label: 'Chịu thuế',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'size',
    label: 'Số tiền/ Công thức',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'density',
    label: 'Kì lương',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'ghichu',
    label: 'Ghi chú',
    minWidth: 170,
    align: 'center',
  }
];
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  background :{
    background: '#2979ff',
  }

});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function NewContractPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
//Các khoản phụ cấp
  const [TenPC, setTenPC] = useState("");
  const [thue, setThue] =useState("");
  const [tien, setTien] = useState("");
  const [luong, setLuong] = useState("");
  const [ghi, setGhi] = useState("");

  const Thue =(e)=>{
    setThue(e.target.value);
  }
  const Tien =(e)=>{
    setTien(e.target.value);
  }
  const KiLuong =(e)=>{
    setLuong(e.target.value);
  }
  const Ten_PhuCap =(e)=>{
    setTenPC(e.target.value);
  }
  const GhiChu =(e)=>{
    setGhi(e.target.value);
  }
 const [state, setState]=useState([])
  //console.log("1",state)


  const Add_Row = ()=>{
    console.log("1",state)
    const Get_TenPCnew=[...state,{
      ten:TenPC,
      thue:thue,
      sotien:tien,
      luong:luong,
      ghichu:ghi
    }]

    setState(Get_TenPCnew)
console.log("2",state)
  }

  const Delete_Row = (idRow)=>{

    /* Get_TenPC.splice(idRow,1);
    setState(Get_TenPC)
     console.log(state);*/

     const index=state.findIndex((item)=>idRow===item.id)
     console.log(state.length)
     console.log(index)

     setState([...state.slice(0,index),...state.slice(index+1,state.length)])
     console.log(state.length)

  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Paper className={classes.root}>{TenPC}
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
        <TableBody>
          <TableRow hover role="checkbox" tabIndex={-1} >
            <TableCell>
              Số hợp đồng
              <CInput type= "text"></CInput>
            </TableCell>
            <TableCell>
              Ngày có hiệu lực
            <CInput type="date"></CInput>
            </TableCell>
          </TableRow>

          <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>
              Tên hợp đồng <CInput type= "text"></CInput>
            </TableCell>
            <TableCell>
              Họ & tên <CInput type= "text"></CInput>
            </TableCell>
            <TableCell>
              Mã nhân viên <CInput type= "text" value="abc"></CInput>
            </TableCell>
          </TableRow>

          <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>
              Loại hợp đồng
              <CSelect>
                <option>
                  Hợp đồng 1
                </option>
                <option>
                  Hợp đồng 2
                </option>
                <option>
                  Hợp đồng 3
                </option>
              </CSelect>
            </TableCell>
            <TableCell>
              Thời hạn hợp đồng (năm)
              <CInput type = "number" required min = "1" max = "10"></CInput>
            </TableCell>
            <TableCell>
            Ngày có hiệu lực
            <CInput type="date" ></CInput>
            </TableCell>
          </TableRow>
          <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>
              Vị trí công việc
              <CSelect>
                <option>
                 Công việc 1
                </option>
                <option>
                Công việc 2
                </option>
                <option>
                Công việc 3
                </option>
              </CSelect>
            </TableCell>
            <TableCell>
            Đơn vị công tác
            <CSelect>
              <option>
               Công tác 1
              </option>
              <option>
              Công tác 2
              </option>
              <option>
              Công tác 3
              </option>
            </CSelect>
            </TableCell>
          </TableRow>
        </TableBody>
        </Table>
      </TableContainer>
    </Paper>
<hr/>
  <b><h4>Các khoản phụ cấp</h4></b>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader  aria-label="sticky table">
            <TableHead   className={classes.background}>
              <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
                <TableCell>
                  <Fab size="small" color="primary" onClick={Add_Row} aria-label="add">
                    <AddIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody >
               {
                 state.length<=0?<div> </div>:state.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.ten}>
                 <TableCell>{row.ten}</TableCell>
                  <TableCell>{row.thue}</TableCell>
                  <TableCell>{row.sotien}</TableCell>
                  <TableCell>{row.luong}</TableCell>
                  <TableCell>{row.ghichu}</TableCell>
                  <TableCell>
                    <IconButton onClick={()=>Delete_Row(row.id)} aria-label="delete" >
                      <DeleteIcon />
                 </IconButton>
                  </TableCell>
              </TableRow>
               ))}

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                  <CSelect onChange={Ten_PhuCap}>
                    <option value="1">
                      Hợp đồng 1
                    </option>
                    <option value="2">
                      Hợp đồng 2
                    </option>
                    <option value="3">
                      Hợp đồng 3
                    </option>
                  </CSelect>
                </TableCell>
                <TableCell>
                  <CSelect onChange={Thue}>
                    <option value="Nhà nước">
                      Thuế 1
                    </option>
                    <option value="Thach">
                      Thuế 2
                    </option>
                    <option value="Công ty">
                      Thuế 3
                    </option>
                  </CSelect>
                </TableCell>
                <TableCell>
                  <CSelect onChange={Tien}>
                    <option value="100">
                      Tiền 1
                    </option>
                    <option value="200">
                      Tiền 2
                    </option>
                    <option value="300">
                      Tiền 3
                    </option>
                  </CSelect>
                </TableCell>
                <TableCell>
                  <CSelect onChange={KiLuong}>
                    <option value="Quý 1">
                      Lương 1
                    </option>
                    <option value="Quý 2">
                    Lương 2
                    </option>
                    <option value="Quý 3">
                    Lương 3
                    </option>
                  </CSelect>
                </TableCell>
                <TableCell>
                  <TextField onChange={GhiChu} type= "text"></TextField>
                </TableCell>
              </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    <Button onClick={handleClickOpen} variant="contained" color="primary"> Thêm</Button>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Thêm mới hợp đồng cho nhân viên?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Thông tin nhân viên sẽ được lưu vào hệ thống.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
