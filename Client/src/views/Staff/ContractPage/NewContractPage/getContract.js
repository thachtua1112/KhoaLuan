import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GetContractApi } from '../../../../callAPI/Hre_Contract.api';

export default function ContractNumber(props) {
  const [NumberContract, SetNemberContract]= useState([])
  const [number, setNumber]= useState("")
  const up_number = (e)=>{
    setNumber(e)
    console.log(number)
    props.parentCallback(number)
  }
  useEffect(()=>{
    GetContractApi().then(res=>{
      SetNemberContract(res.data)
    })
  },[])

  return (
    <div>
    <Autocomplete
      id="combo-box-demo"
      options={NumberContract}
      getOptionLabel={(option) => option.ContractNo}
      renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
      onChange={(event, item) => up_number(item==null?"":item.ContractNo)}
    />
    </div>
  );
}
