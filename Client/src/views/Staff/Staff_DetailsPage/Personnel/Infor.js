import React  from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow

} from '@coreui/react'
import usersData from './userData';
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = [
  { key: 'name', _style: { width: '40%'} },
  'registered',
  { key: 'role', _style: { width: '20%'} },
  { key: 'status', _style: { width: '20%'} },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]

const Infor= ()=>{
  return(
    <>
    <CRow>
        <CCol >
          <CCard>

            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              size='sm'
              bordered
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      </>
  )
}

export default Infor;
