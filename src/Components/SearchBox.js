import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { SearchTwoTone } from '@material-ui/icons';



export default function InputWithIcon() {
  

  return (
    <div 
    style={{display:'flex',flexDirection:'row',
    borderBottom:'1px solid gray'}}>
      <SearchIcon  
       style={search}/>
      <input
     
       style={input}
        placeholder="Type here to Search"
      
       
       
      />
       
     
    </div>
  );
}
const search=
{
  fontSize:24,
  fontWeight:'400',
  color: 'rgb(141, 105, 29)'
}
const input={
  borderWidth:0,
  color:'rgb(141, 105, 29)',
  marginLeft:10
}

