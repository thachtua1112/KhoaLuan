import React, { useEffect, useState } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
} from "@coreui/react";

import Infor from "./Infor";
import { GetHre_Profie_Api } from "../../../../callAPI/Hre_Profile.api";
const Personnel = (props) => {
  const [infor, setInfor] = useState([]);
  const [Qualification, setQualification] = useState([]);
  const params = props.params;

  useEffect(() => {
    GetHre_Profie_Api(params).then((res) => {
      if (res.data) {
        setInfor([res.data]);
        setQualification(res.data.ProfileID)
      }
    });
  }, [params]);

  return (
    <CRow>
      <CCol className="mb-4">
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>Thông tin nhân viên</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>{<Infor data={infor} IDQualification={Qualification}/>}</CTabPane>

              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Personnel;
