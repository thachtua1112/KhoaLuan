import React from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ContractTable = (props)=>{
  const data = props.data;
  return (
  <Paper >
    <TableContainer>
      <Table >
      <TableHead>
      <TableRow><StyledTableCell colSpan={8}> <b>Thông tin cơ bản</b></StyledTableCell></TableRow>

      </TableHead>
          {
            data.map((index)=> { return (
            <TableBody key={index.ID}>
              <TableRow hover role="checkbox" tabIndex={-1} >
                <TableCell align="right"><b>Họ và tên</b></TableCell>
                <TableCell>{index.ProfileName}</TableCell>
                <TableCell align="right"><b>Mã nhân viên</b></TableCell>
                <TableCell >{index.CodeEmp}</TableCell>
                <TableCell align="right"><b>Ngày vào làm</b></TableCell>
                <TableCell >{index.DateHire}</TableCell>
                <TableCell align="right"><b>Ngày kí hợp đồng</b></TableCell>
                <TableCell >{index.DateContract}</TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1} >
                <TableCell align="right"><b>Chức vụ</b></TableCell>
                <TableCell>{index.PositionName}</TableCell>
                <TableCell align="right"><b>Chi nhánh</b></TableCell>
                <TableCell >{index.E_DIVISION}</TableCell>
                <TableCell align="right"><b>Bộ phận</b></TableCell>
                <TableCell >{index.E_DEPARTMENT}</TableCell>
                <TableCell align="right"><b>Vị trí</b></TableCell>
                <TableCell >{index.E_SECTION}</TableCell>
              </TableRow>
            </TableBody>
            )
          })
        }
      </Table>
    </TableContainer>
  </Paper>
  )
}
export default ContractTable
