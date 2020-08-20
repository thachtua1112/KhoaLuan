import React ,{useState}from "react"
import { CModal, CModalHeader, CModalBody, CModalFooter } from "@coreui/react"
import {Select, Grid, TextField, FormControl ,makeStyles, Button,
Dialog,DialogTitle,DialogActions
} from "@material-ui/core"



import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";


import ProfileAPI from "../../../../callAPI/Profile.api"

import StopWorkingAPI from "../../../../callAPI/Hre_StopWorking.api"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  paper: {
    //padding: theme.spacing(1),
  },
  date: {
   
  },
}));


const NewAndDetail=(props)=>{
  const classes = useStyles();
  const {Show, setShow,document} =props
  const [StatusOption, setStatusOption] = useState(Show.option)
  const [Document, setDocument] = useState("update"===StatusOption?document:{
      StopWorkType:"XIN_NGHI",
      DateStop:new Date()
    })
  const [StatusModifile, setStatusModifile] = useState(false)
  const [StatusConfim, setStatusConfim] = useState(false)

  const [Err, setErr] = useState({})

  
 
  const handleOnClose=()=>{
    if(StatusModifile){
      return setStatusConfim(true)
    }
    setDocument({})
    setErr({})
    setShow({})
  }

  const onSave=async()=>{

    if("new"===StatusOption){
      if(Err.CodeEmp||Err.CodeEmp===undefined){
        return alert("MA NV CHUA NHAP HOAC NHAP SAI VUI LONG NHAP LAI")    
      }
      const data=await StopWorkingAPI.create(Document);
      setDocument({...data.data.data[0],DateStop:new Date(data.data.data[0].DateStop)})
      setStatusOption("update")
      return setStatusModifile(false)
    }
    
  }

  return <CModal
    size="xl"
    show={Show.show}
    onClose={handleOnClose}
    closeOnBackdrop={false}
    >
<CModalHeader closeButton></CModalHeader>
<CModalBody>
<Grid className={classes.root} container spacing={1}>
<Grid className={classes.paper} container spacing={2}>
  <Grid item xs={3}>
    Mã nhân viên
    <TextField
      error={Err.CodeEmp}
      helperText={Err.helpTextCodeEmp}
      placeholder="Vui lòng nhập"
      disabled={"update"===StatusOption?true:false}
      value={!Document.CodeEmp?"":Document.CodeEmp}
      onBlur={ async()=>{
          if(!Document.CodeEmp)
          { 
               return setErr({...Err,CodeEmp:true,helpTextCodeEmp:"BAN CHUA NHAP MA NV"})    
          }
          const data = await ProfileAPI.getProfilesbyCodeEmp(Document.CodeEmp)
          if(1!==data.data.length){
            return setErr({...Err,CodeEmp:true,helpTextCodeEmp:"MA NV KO CHINH XAC"})   
          }
          if("E_STOP"===data.data[0].StatusSyn){
            return setErr({...Err,CodeEmp:true,helpTextCodeEmp:"NV DA NGHI VIEC"})   
          }
          setDocument({...Document,ProfileName:data.data[0].ProfileName})
      }}
      onChange={(event) => {
         const CodeEmpInput=event.target.value;
         setStatusModifile(true)
         setErr({...Err,CodeEmp:false,helpTextCodeEmp:null})   
         if(""!==CodeEmpInput.trim()){
            return setDocument({
                ...Document,
                CodeEmp: CodeEmpInput
              });
         }
         const {CodeEmp ,...docuent}=Document
         setDocument(docuent)
      }}
      variant="outlined"
      size="small"
      fullWidth
    />
  </Grid>
  <Grid item xs={3}>
    Tên nhân viên
    <TextField
      value={!Document.ProfileName ? "" : Document.ProfileName}
      disabled
      variant="outlined"
      size="small"
      fullWidth
    />
  </Grid>
  <Grid item xs={3}>
    <FormControl variant="outlined" fullWidth size="small" >

    LOAI NGHI VIEC
            {
               <Select
               native
               className={classes.select}
               value={Document.StopWorkTypeValue}
               onChange={(event)=>{
                   setDocument({...Document,StopWorkType:event.target.value})
                   setStatusModifile(true)
               }}
             >
                {StopWorkTypeValue.map((option) => (    
                  <option   key={option.value}  value={option.value}>
                       
                    {option.label} 
                   
                  </option>
                
                ))}
              </Select>
            }

    </FormControl>
     </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                NGAY NGHI VIEC
                <div >
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    size="small"
                    fullWidth={false}
                    className={classes.date}
                    format="dd/MM/yyyy"
                    value={!Document.DateStop ? null : Document.DateStop }
                    onChange={(date) => {
                     setDocument({...Document,DateStop:date})
                     setStatusModifile(true)
                    }}
                  />
                </div>
              </FormControl>
            </Grid>
          </MuiPickersUtilsProvider>
 
</Grid>
<Grid className={classes.paper} container spacing={2}>
  <Grid item xs={6}>
    LI DO
    <TextField
      placeholder="Vui lòng nhập"
      multiline
      value={!Document.ResignReason?"":Document.ResignReason}
      onChange={(event) => {
        setStatusModifile(true)
        const ResignReasonInput=event.target.value;
        //setErr({...Err,ResignReason:false,helpTextResignReason:null})   
        if(""!==ResignReasonInput.trim()){
           return setDocument({
               ...Document,
               ResignReason: ResignReasonInput
             });
        }
        const {ResignReason ,...docuent}=Document
        setDocument(docuent)
     }}
      rows={6}
      variant="outlined"
      size="small"
      fullWidth
    />
  </Grid>
  <Grid item xs={6}>
    GHI CHU
    <TextField
      required
      value={!Document.Note?"":Document.Note}
      onChange={(event) => {
        setStatusModifile(true)
        const NoteInput=event.target.value;
        //setErr({...Err,Note:false,helpTextNote:null})   
        if(""!==NoteInput.trim()){
           return setDocument({
               ...Document,
               Note: NoteInput
             });
        }
        const {Note ,...docuent}=Document
        setDocument(docuent)
     }}
      placeholder="Vui lòng nhập"
      multiline
      rows={6}
      variant="outlined"
      size="small"
      fullWidth
    />
    </Grid>
</Grid>

{
  "update"!==StatusOption?null:(<Grid className={classes.paper} container spacing={2}>
    <Grid item xs={3}>
      NGUOI TAO
      <TextField
        disabled
        variant="outlined"
        size="small"
        fullWidth
      />
      </Grid>
      <Grid item xs={3}>
      NGUOI DUYET
      <TextField
        disabled
        variant="outlined"
        size="small"
        fullWidth
      />
    </Grid>
    <Grid item xs={3}>
      NGAY DUYET
      <TextField
        //value={Document.createdAt}
        disabled
        variant="outlined"
        size="small"
        fullWidth
      />
      </Grid>
      <Grid item xs={3}>
      DANH SACH DEN
      <TextField
        disabled
        variant="outlined"
        size="small"
        fullWidth
      />
    </Grid>
  </Grid>)
}

 </Grid>
</CModalBody>
<CModalFooter>
  <Button disabled={!StatusModifile?true:false}  onClick={onSave} variant="contained" color="primary" style={{marginRight:"10px"} } >Lưu lai</Button>
  <Button variant="contained" color="primary" onClick={handleOnClose} >Thoát</Button>
    <Dialog
      open={StatusConfim}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
      //onClose={handleClose}
    >
      <DialogTitle >CONG VIEC BAN DANG LAM CHUA HOAN THANH, BAN MUON TIEP TUC KHONG</DialogTitle>
       <DialogActions>
          <Button autoFocus onClick={()=>{
            setStatusConfim(false)
          }} color="primary">
            Tiep tuc
          </Button>
          <Button onClick={()=>{
            setDocument({})
            setErr({})
            setShow({})
            setStatusConfim(false)
          }} color="primary" autoFocus>
            Thoat
          </Button>
        </DialogActions>
      </Dialog>
</CModalFooter>
</CModal>
}

export default NewAndDetail

const StopWorkTypeValue = [
    {
      value: "XIN_NGHI",
      label: "XIN_NGHI",
    },
    {
      value: "DUOI_VIEC",
      label: "DUOI_VIEC",
    },
    {
        value: "HET_HD",
        label: "HET_HD",
      },
  ];

 
  
  