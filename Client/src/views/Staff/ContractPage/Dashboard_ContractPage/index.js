import React, { useState, useEffect } from 'react'
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable
} from '@coreui/react'
import {  blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import {LinearProgress} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { All_THreProfie_Api } from '../../../../callAPI/T_HreProfile.api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button: {
    margin: theme.spacing(1)
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
const fields = [
  { key: 'CodeEmp', _style: { width: '10%'} },
  { key: 'ProfileName', _style: { width: '25%'} },
  { key: 'Gender', _style: { width: '10%'} },
  { key: 'DateHire', _style: { width: '10%'} },
  { key: 'DateContract', _style: { width: '10%'} },

 /* {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }*/
]
const getBadge = Gender => {
  switch (Gender) {
    case 'E_FEMALE': return 'Nữ'
    default: return 'Nam'
  }
}


const ContractPage = () => {
  const classes = useStyles();
  const [name,setName]=useState("");
  const [code,setCode]=useState("");
  const [staff,setStaff]=useState([]);
  const [load,setLoad]=useState(false);
  const [profile,setProfile]=useState("");

  useEffect(()=>{
    All_THreProfie_Api(null).then(res=>{
      if(res.data)
      {
        setStaff(res.data)
        setLoad(true)
      }
    })
  },[])

  const up_Name = (e) =>{
    setName(e.target.value);
  }
  const up_CodeEmp = (e) =>{
    setCode(e.target.value);
  }
  let filter = staff.filter(
    (contact)=>{
      return contact.ProfileName.toLowerCase().indexOf(name.trim().toLowerCase()) !== -1;
    }
  );
  let filter2 = filter.filter(
  (contact)=>{
    return contact.CodeEmp.toLowerCase().indexOf(code.trim().toLowerCase()) !== -1;
  }
  );

  return  (
    <CCol>
          <CCard>
            <CCardBody> <b>DANH SÁCH HỢP ĐỒNG</b>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  label="Tên nhân viên"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  onChange={up_Name} type="search"
                />
                <TextField
                  label="Mã nhân viên"
                  id="outlined-size-normal"
                  variant="outlined"
                  size="small"
                  onChange={up_CodeEmp} type="search"
                />
                <TextField
                label="Loại hợp đồng"
                id="outlined-size-normal"
                variant="outlined"
                size="small"
                onChange={up_CodeEmp} type="search"
              />
                <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<PresentToAllIcon />}
                >
                  Kết xuất
                </Button>
                Nhân viên: <b>{profile}</b>
              </ThemeProvider>
            </form>
{ load===false?<LinearProgress />:(
            <CDataTable
              items={filter2}
              fields={fields}
              hover
              size='sm'
              striped
              bordered
              itemsPerPage={15}
              pagination
              clickableRows
              onRowClick={(item) => setProfile(item.ProfileName)}
              scopedSlots = {{
                'Gender':
                  (item)=>(
                    <td>
                      {getBadge(item.Gender)}
                    </td>
                  )
              }
            }
            />
)}
            </CCardBody>
          </CCard>
        </CCol>
  )
}
export default ContractPage
