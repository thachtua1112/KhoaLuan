import React  from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';


const Infor= (props)=>{
  const data=props.data
  return(
    <Paper >
      <TableContainer>
      <TableHead ><b>Thông tin cơ bản</b></TableHead>
        <Table >
            {
              data.map((index)=> { return (
                <TableBody key={index.ID}>
                <TableRow hover role="checkbox" tabIndex={-1} >
                  <TableCell align="right"><b>Họ và tên</b></TableCell>
                  <TableCell>{index.ProfileName}</TableCell>
                  <TableCell align="right"><b>Số CMND</b></TableCell>
                  <TableCell >{index.CodeTax}</TableCell>
                  <TableCell align="right"><b>Nơi cấp CMND</b></TableCell>
                  <TableCell >{index.IDPlaceOfIssue}</TableCell>
                  <TableCell align="right"><b>Ngày cấp CMND</b></TableCell>
                  <TableCell >{index.IDDateOfIssue}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1} >
                  <TableCell align="right"><b>Giới tính</b></TableCell>
                  <TableCell>{index.Gender}</TableCell>
                  <TableCell align="right"><b>Mã nhân viên</b></TableCell>
                  <TableCell>{index.CodeEmp}</TableCell>
                  <TableCell align="right"><b>Mã chấm công</b></TableCell>
                  <TableCell >{index.CodeAttendance}</TableCell>
                  <TableCell align="right"><b>Trạng thái</b></TableCell>
                  <TableCell>{index.StatusSyn}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1} >
                  <TableCell align="right"><b>Ngày vào làm</b></TableCell>
                  <TableCell>{index.DateHire}</TableCell>
                  <TableCell align="right"><b>Ngày kết thúc thử việc</b></TableCell>
                  <TableCell>{index.DateEndProbation}</TableCell>
                  <TableCell align="right"><b>Ngày sinh</b></TableCell>
                  <TableCell >{index.DateOfBirth}</TableCell>
                  <TableCell align="right"><b>Nơi sinh</b></TableCell>
                  <TableCell>{index.PlaceOfBirth}</TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1} >
                  <TableCell align="right"><b>Số hộ chiếu</b></TableCell>
                  <TableCell>{index.PassportNo}</TableCell>
                  <TableCell align="right"><b>Ngày cấp hộ chiếu</b></TableCell>
                  <TableCell>{index.PassportDateOfIssue}</TableCell>
                  <TableCell align="right"><b>Ngày hết hạn</b></TableCell>
                  <TableCell >{index.PassportDateOfExpiry}</TableCell>
                  <TableCell align="right"><b>Nơi cấp</b></TableCell>
                  <TableCell>{index.PassportPlaceOfIssue}</TableCell>
              </TableRow>
              </TableBody>
              )})
            }
        </Table>
      </TableContainer>
      <TableContainer>
        <Table>
          <TableHead><b>Liên hệ</b></TableHead>
          {
          data.map((index)=> { return (
          <TableBody key={index.ID}>
            <TableRow>
              <TableCell><b>Số điện thoại</b></TableCell>
              <TableCell>{index.Cellphone}</TableCell>
            </TableRow>
          </TableBody>
          )}
          )
          }
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Infor;
