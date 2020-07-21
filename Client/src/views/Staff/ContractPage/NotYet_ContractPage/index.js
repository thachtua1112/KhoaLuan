import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CInput
} from '@coreui/react'
import usersData from './UsersData'

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
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}


const NotYet_ContractPage = () => {
  const [name,setName]=useState("")
  const up_Name = (e) =>{
    setName(e.target.value);
  }
  return (
    <CCol>
          <CCard>
            <CCardHeader>
              Danh sách nhân viên chưa có hợp đồng
            </CCardHeader>
            <CCardBody>
            <CInput  onChange={up_Name} type="search" placeholder="Username" autoComplete="username" />
{name}
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
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
  )
}
export default NotYet_ContractPage
