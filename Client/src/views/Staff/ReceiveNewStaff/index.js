import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CDataTable,CSidebarNav, CInput
} from '@coreui/react'
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles,createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {csv} from 'd3'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
    },
    "& table": {
      "table-layout": "fixed",
    },

  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(1),
    //textAlign: "center",
    height: "88vh",
    color: theme.palette.text.secondary,
  },

  sidebar: {
    padding: theme.spacing(1),
    //textAlign: "center",
    height: "100vh",
    color: theme.palette.text.secondary,
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});



const ReceiveNewStaffPage = () => {
  const classes = useStyles();
  const [name,setName]=useState("");
  const [code,setCode]=useState("");
  const [loadFiles,setLoadFiles]=useState(null);
  const up_files = (e)=>{
    let files=e.target.files;
    let reader = new FileReader();
    if(files.length>0)
    {
      reader.readAsDataURL(files[0])
      reader.onload=(e)=>{
      csv(e.target.result).then(data =>{
        setLoadFiles(data)
        })
      }
    }
  }

  const Show=()=>{
    console.log("files",loadFiles);
  }
  const up_Name = (e) =>{
    setName(e.target.value);
  }
  const up_CodeEmp = (e) =>{
    setCode(e.target.value);
  }
  /*
  let filter = staff.filter(
    (contact)=>{
      return contact.ProfileName.toLowerCase().indexOf(name.trim().toLowerCase()) !== -1;
    }
  );

let filter2 = filter.filter(
(contact)=>{
  return contact.CodeEmp.toLowerCase().indexOf(code.trim().toLowerCase()) !== -1;
}
);*/
  return  (
          <CCard >
            <CCardBody className={classes.paper} > <b>TIẾP NHẬN NHÂN VIÊN {name}{code}</b>
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
                  className={classes.button}
                  onClick={Show}
                  startIcon={<CloudUploadIcon />}
                >
                  Duyệt
                </Button>
              </ThemeProvider>
              <CInput className={classes.button} type='file' onChange={up_files}></CInput>
            </form>

          <CSidebarNav>
            <CDataTable
              items={loadFiles}
              hover
              size='sm'
              striped
              bordered
              itemsPerPage={15}
              pagination
             // onRowClick={(item) => history.push(`/nhan-su/hop-dong/tao-moi-hop-dong/${item.CodeEmp}`)}
              clickableRows
            />
    </CSidebarNav>
            </CCardBody>
          </CCard>
  )
}
export default ReceiveNewStaffPage
