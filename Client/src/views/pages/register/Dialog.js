import React,{useState} from 'react';

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Register from './Register';

const New_User = ()=>{
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return(
  <div>
  <Fab size="small" color="primary" onClick={handleClickOpen} aria-label="add">
      <AddIcon />
  </Fab>
    <Dialog
        open={open}
        TransitionComponent={Transition}
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
export default New_User
