import React from 'react'
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
} from '@coreui/react'

import Infor from './Infor'
const Personnel = () => {
  //const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

  return (
    <CRow>
      <CCol className="mb-4">

        <CCard>

          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    Thông tin nhân viên
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Liên hệ
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Ngoại vụ
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                <CNavLink>
                  Người thân
                </CNavLink>
                </CNavItem>
                <CNavItem>
                <CNavLink>
                  Trình độ chuyên môn
                </CNavLink>
                </CNavItem>
                <CNavItem>
                <CNavLink>
                  Đảng & đoàn
                </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                 <Infor  />
                </CTabPane>
                <CTabPane>

                </CTabPane>
                <CTabPane>
                  {`3. ${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Personnel
