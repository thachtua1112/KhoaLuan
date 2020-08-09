import React from "react"
import { CModal, CModalHeader, CModalBody, CModalFooter, CButton } from "@coreui/react"

const NewProfile=(props)=>{
    const {showNewProfile, setshowNewProfile} =props
return <CModal
size="lg"
show={showNewProfile}
onClose={()=>setshowNewProfile(false)}
//onClosed={()=>setshowNewProfile(false)}
closeOnBackdrop={false}
>
<CModalHeader closeButton>Thêm nhân viên mới</CModalHeader>
<CModalBody>
  Lorem ipsum dolor...
</CModalBody>
<CModalFooter>
<CButton color="primary">Lưu và đến trang cập nhật thông tin</CButton>
  <CButton color="primary">Lưu và thoát</CButton>
</CModalFooter>
</CModal>
}

export default NewProfile