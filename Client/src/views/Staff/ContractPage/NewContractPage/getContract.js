import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GetContractApi } from '../../../../callAPI/Hre_Contract.api';

export default function ComboBox(props) {
  const [NumberContract, SetNemberContract]= useState([])
  const [number, setNumber]= useState("")
  const up_number = (e)=>{
    setNumber(e)
    console.log(number)
  }
  useEffect(()=>{
    GetContractApi().then(res=>{
      SetNemberContract(res.data)
    })
  },[])
  const sendData = () => {
    props.parentCallback(NumberContract);
  }
  return (
    <div>
    <Autocomplete
      id="combo-box-demo"
      options={NumberContract}
      getOptionLabel={(option) => option.ContractNo}
      renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
      onChange={(event, item) => up_number(item==null?"":item.ContractNo)}
    />
    <button onClick={sendData}>t</button>
    </div>
  );
}
