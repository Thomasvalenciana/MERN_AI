import React from 'react';
import TextField from '@mui/material/TextField'
type Props ={
       name:string;
       type: string;
       label:string;
       
};

const CustomizeInput = (props: Props) => {
    return <TextField name={props.name} label={props.label} type ={props.type}/>;
 
  
};

export default CustomizeInput