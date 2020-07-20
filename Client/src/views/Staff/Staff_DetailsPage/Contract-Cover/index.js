import React from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCardBody,
  CTabs
} from '@coreui/react'
import {
  Paper
} from '@material-ui/core'
import ContractTable from './Contract_table'
const ContractCover = () =>{
  return(
    <CRow>
    <CCol className="mb-4">
    <Paper>
      <CCardBody>
        <CTabs>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink>
                Hợp đồng
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>
              Phụ lục hợp đồng
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>
               Chứng từ bảo hiểm
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane>
        <ContractTable/>

            </CTabPane>
            <CTabPane>

            </CTabPane>
            <CTabPane>

            </CTabPane>
          </CTabContent>
        </CTabs>
    </CCardBody>
    </Paper>
  </CCol>

  </CRow>
  )
}
export default ContractCover
