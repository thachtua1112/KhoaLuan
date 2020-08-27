import React, { useState, useEffect } from 'react'
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import { saveAs } from 'file-saver';
import axios from 'axios'
import qs from 'qs'
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
import { CreateApi } from '../../../../callAPI/ExportFile';
import * as config from '../../../../callAPI/config'
import { GetHre_Profie_Api } from '../../../../callAPI/Hre_Profile.api';
import {ListContractApi} from '../../../../callAPI/Hre_Contract.api'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
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
  { key: 'CodeEmp', _style: { width: '100px'}, label:"Mã nhân viên" },
  { key: 'ProfileName', _style: { width: '300px'},  label:"Họ và tên" },
  { key: 'Gender', _style: { width: '300px'}, label:"Giới tính" },
  { key: 'DateHire', _style: { width: '300px'}, label:"Ngày tuyển" },
  { key: 'DateSigned', _style: { width: '300px'},  label:"Ngày kí hợp đồng" },
  { key: 'DateStart', _style: { width: '300px'},  label:"Ngày có hiệu lực" },
  { key: 'DateEnd', _style: { width: '300px'},  label:"Ngày hết hạn" },


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
    case 'E_FEMALE': return 'Nữ';
    default: return 'Nam'
  }
}


const ContractPage = () => {
  const classes = useStyles();
  const [name,setName]=useState("");
  const [code,setCode]=useState("");
  const [staff,setStaff]=useState([]);
  const [load,setLoad]=useState(false);

  const [profilename,setProfileName]=useState("");
  const [gender,setGender]=useState("");
  const [DateOfBirth,setDateOfBirth]=useState("")
  const [PAStreet,setPAStreet]=useState("")
  const [IDNo,setIDNo]=useState("")
  const [IDDateOfIssue,setIDDateOfIssue]=useState("")
  const [IDPlaceOfIssue,setIDPlaceOfIssue]=useState("")
  const [DateContract,setDateContract]=useState("")
  const [ContractNo, setContractNo]= useState("")
  useEffect(()=>{
    ListContractApi().then(res=>{
      if(res.data)
      {
        setStaff(res.data)
        setLoad(true)
      }
    })
  },[])

  const up_Profile = (item)=> {
    setProfileName(item.profiles[0].ProfileName)
    setGender(getBadge(item.profiles[0].Gender))
    setDateContract(item.DateSigned)
    setContractNo(item.ContractNo)
      //liên kết thông tin
      GetHre_Profie_Api(item.profiles[0].ID).then((res)=>{
        if(res.data)
        {
          console.log(res.data)
          setDateOfBirth(res.data.DateOfBirth)
          setPAStreet(res.data.PAddress)
          setIDNo(res.data.IDNo)
          setIDDateOfIssue(res.data.IDDateOfIssue)
          setIDPlaceOfIssue(res.data.IDPlaceOfIssue)
        }
      })
  }
  const Infor = {
    name:profilename,
    gender:gender,
    DateOfBirth:DateOfBirth,
    PAStreet:PAStreet,
    IDNo:IDNo,
    ContractNo:ContractNo,
    IDDateOfIssue:IDDateOfIssue,
    IDPlaceOfIssue:IDPlaceOfIssue,
    DateContract:DateContract
  }

  const Export = ()=>{
 console.log(Infor)
    //xuất file
    CreateApi(qs.stringify(Infor))
    .then(()=> axios.get(`${config.REACT_URL_API}/fetch-pdf`, { responseType: 'blob' }))
    .then((res)=>{
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, `HopDong${profilename}.pdf`);
    })
  }

  const up_Name = (e) =>{
    setName(e.target.value);
  }
  const up_CodeEmp = (e) =>{
    setCode(e.target.value);
  }
  let filter = staff.filter(
    (contact)=>{
      if(contact.profiles[0])
      {
        return contact.profiles[0].ProfileName.toLowerCase().indexOf(name.trim().toLowerCase()) !== -1;
      }
      return 0;
    }
  );
  let filter2 = filter.filter(
  (contact)=>{
    if(contact.profiles[0])
    {
      return contact.profiles[0].CodeEmp.toLowerCase().indexOf(code.trim().toLowerCase()) !== -1;
    }
    return 0;
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

                <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={Export}
                  className={classes.button}
                  startIcon={<PresentToAllIcon />}
                >
                  Kết xuất
                </Button>
                Nhân viên: <b>{profilename}</b>
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
              onRowClick={(item) => up_Profile(item)}
              scopedSlots = {{
                'Gender':
                  (item)=>(

                    <td>
                      {getBadge( item.profiles[0]?item.profiles[0].Gender:"")}
                    </td>
                  ),
                  "CodeEmp":
                  (item)=>( <td>
                    {
                      item.profiles[0]?item.profiles[0].CodeEmp:""
                    }
                  </td>)
                  ,
                  "ProfileName":
                  (item)=>( <td>
                    {
                      item.profiles[0]?item.profiles[0].ProfileName:""
                    }
                  </td>),
                  "DateHire":
                  (item)=>( <td>
                    {
                      item.profiles[0]?item.profiles[0].DateHire:""
                    }
                  </td>)
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
