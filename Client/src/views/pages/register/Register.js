import React,{useState} from 'react'
import qs from 'qs'
import {
  CButton,
  CCardBody,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { makeStyles } from '@material-ui/core/styles';
import {RegisterApi} from '../../../callAPI/Authentication.api'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const Register = () => {
  const [name,setname]=useState("");
  const [pass,setPass]=useState("");
  const [rePass,setRePass]=useState("");
  const [mss, setMss]=useState("")
  const [err,setErr]=useState("");
  const [hide,setHide]=useState(false);

  const up_Name = (e) =>
  {
    setname(e.target.value)
  }
  const up_Pass = (e) =>
  {
    setPass(e.target.value)
  }
  const up_RePass = (e) =>
  {
    setRePass(e.target.value)
  }
  const On_Register = ()=>{
    setHide(true)
    if(name===""||pass===""||rePass==="")
    {
      return setErr("Bắt buộc phải nhập");
    }
    if(pass!==rePass)
    {
      return setErr("xác nhận mật khẩu sai");
    }
    else{
      RegisterApi(qs.stringify({
        role:"admin",
        username:name,
        password:pass,
        password_confirm:rePass
      })).then(res=>{
        if(res.data)
        {
          if(res.data.mss)
          {
            setMss(res.data.mss)
          }
          if(res.data.err)
          {
            setErr(res.data.err)
          }
        }
      })
    }
  }
  return (
      <CContainer>
              <CCardBody className="p-4">
                <CForm>
                  <h1>Tạo tài khoản</h1>
                { hide===true? ( (err !== "" && mss==="") ?
                  <div className={useStyles.root}>
                    <Alert severity="error">{err} - check it out</Alert>
                  </div>: <Alert severity="success">{mss} — success!</Alert>
                 ):""
                }

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={up_Name} type="text" placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  {
                    /*
                    <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                    */
                  }

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={up_Pass} type="password" placeholder="Password" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={up_RePass} type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton onClick={On_Register} color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              {/*
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
              */}

      </CContainer>
  )
}

export default Register
