import React,{useState} from 'react';

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Register from './Register';
import {
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const NewUser = ()=>{
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
  <div>
    <CDropdownItem onClick={handleClickOpen}>
        <CIcon  name="cil-user" className="mfe-2" />
        Add User
    </CDropdownItem>
    <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
           <Register/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
  </div>
  )
}
export default NewUser
