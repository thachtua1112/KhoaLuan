import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import login from '../../../callAPI/Authentication.api'

const Login = () => {
  const [name,setname]=useState("");
  const [pass,setPass]=useState("");
  const [isRedirect,setisRedirect]=useState(false);
  const up_Name = (e) =>
  {
    setname(e.target.value)
  }
  const up_Pass = (e) =>
  {
    setPass(e.target.value)
  }

  const On_login = () =>{
    axios
    .post("http://localhost:8797/user/login",qs.stringify( {
      username:name,
      password:pass
     }),
    {
     headers : {
       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
   }
    })
    .then((res) =>{
      if ("success" === res.data.login) {
        console.log("DANG_NHAP_THANH_CONG");
        localStorage.setItem("token",res.data.accessToken);
        localStorage.setItem("RefreshToken",res.data.refreshToken);
        setisRedirect(true);
      }
       console.log(res)

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return   isRedirect?<Redirect to='/' />:
  (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={up_Name} type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={up_Pass} type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={On_login} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Phong Phu International</h2>
                    <p>We are also interested in venturing with foreign manufacturers in term of technology know-how and marketing alliance
                     to take advantage of Vietnam recent emerging as new textile sourcing center in Asia.</p>

                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
