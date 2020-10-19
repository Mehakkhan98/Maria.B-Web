
import React from 'react'
import Search from '../Components/SearchBox'
import CancelIcon from '@material-ui/icons/Cancel';
import HttpsIcon from '@material-ui/icons/Https';
import { IconButton } from '@material-ui/core';
import MyLink from './MyLink'
export default class App extends  React.Component{
    constructor(props) {
        super(props);
        this.state = 
        {
        unstitched:false,
        readytowear:false,
        kids:false,
        weddingwear:false,
        stitched:false
    };
      }
     
render()
{
    
    return(
    
        <div style={{...headerdiv1,height:70,marginBottom:3}}>
                <div style={row}>
                <div style={itemstyle}>Shopping Bag (1 item)</div>
    
     <CancelIcon  onClick={()=>this.props.cancel()}
     style={{ color:'rgb(141, 105, 29)',
                     fontSize:14,marginLeft:130
                          }}/>
  
               
       
        
                </div>
            
              
       </div>
       
      
       
    )
}
}
 
const headerdiv1={
  background:'#ffffff',
  top:0,
  // width:'98%',
  boxShadow: "1px 3px 1px #c9c9c9"
}
const row={
  display:'flex',
  position:'absolute',
  marginTop:10,
  padding:20,
  justifyContent:'spacebetween'
}

 
const itemstyle={
    color:'rgb(141, 105, 29)',
    fontSize:12,
  
    
}