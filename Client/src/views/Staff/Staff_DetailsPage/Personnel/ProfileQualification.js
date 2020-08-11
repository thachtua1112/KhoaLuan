import React, { useState, useEffect }  from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import { TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CInput } from '@coreui/react';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
//import qs from 'qs'
import { GetIdProfileQualificationApi } from '../../../../callAPI/Hre_ProfileQualification.api';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ProfileQualificationChild= (props)=>{
  const IDQualification = props.IDQualification;
  const [edit,setEdit]= useState(false)
  const [name,setName]= useState("")
  const [place,setPlace]= useState("")

  const [Qualification,setQualification]= useState([])
 useEffect(()=>{
  GetIdProfileQualificationApi(`${IDQualification}`).then(res=>{
    setQualification(res.data)
    console.log("adadadad",IDQualification)
  })
 },[IDQualification])
 const up_Name = (e)=>{
   setName(e.target.value)
   console.log(name)

 }
 const up_Place = (e)=>{
  setPlace(e.target.value)
}
 const On_edit = ()=>{
  setEdit(true)
}
const On_update = ()=>{
  setEdit(false)
  console.log(Qualification.length)
}
const On_Create = ()=>{

}
  return(
    <TableContainer>
    <Table>
      <TableHead>
      <TableRow><StyledTableCell colSpan={8}> <b>Trình độ chuyên môn</b></StyledTableCell></TableRow>
      </TableHead>
      {
        Qualification.length===0?
          (<TableBody>
            <TableRow>
              <TableCell><IconButton onClick={On_Create}><SpellcheckIcon /></IconButton></TableCell>
              <TableCell align="right"><b>Tên bằng cấp</b></TableCell>
              <TableCell colSpan='2'>
                <CInput onChange={up_Name} type='text' ></CInput>
              </TableCell>
              <TableCell  align="right"><b>Nơi đào tạo</b></TableCell>
              <TableCell colSpan='3'>
                <CInput onChange={up_Place} type='text' ></CInput>
              </TableCell>
            </TableRow>
          </TableBody>
          )
        :Qualification.map((index)=> { return (
      <TableBody key={index.ID}>
      {edit===false?(
        <TableRow>
          <TableCell><IconButton onClick={On_edit}><EditIcon/></IconButton></TableCell>
          <TableCell align="right"><b>Tên bằng cấp</b></TableCell>
          <TableCell colSpan='2'>{index.FieldOfTraining}</TableCell>
          <TableCell align="right"><b>Nơi đào tạo</b></TableCell>
          <TableCell colSpan='3'>{index.TrainingPlace}</TableCell>
        </TableRow>
      ):
      (
        <TableRow>
          <TableCell><IconButton onClick={On_update}><SpellcheckIcon /></IconButton></TableCell>
          <TableCell align="right"><b>Tên bằng cấp</b></TableCell>
          <TableCell colSpan='2'>
            <CInput  onChange={up_Name} type='text' ></CInput>
          </TableCell>
          <TableCell align="right"><b>Nơi đào tạo</b></TableCell>
          <TableCell colSpan='3'>
            <CInput  onChange={up_Place} type='text' ></CInput>
          </TableCell>
        </TableRow>
      )
    }
      </TableBody>
      )}
      )
  }
    </Table>
  </TableContainer>
  )
}
export default ProfileQualificationChild
