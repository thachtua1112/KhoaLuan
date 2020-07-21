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
  const params = props.params;

  useEffect(() => {
    GetHre_Profie_Api(params).then((res) => {
      if (res.data) {
        setInfor(res.data);
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
                <CNavItem>
                  <CNavLink>Liên hệ</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Ngoại vụ</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Người thân</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Trình độ chuyên môn</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Đảng & đoàn</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>{<Infor data={infor} />}</CTabPane>
                <CTabPane></CTabPane>
                <CTabPane></CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Personnel;
