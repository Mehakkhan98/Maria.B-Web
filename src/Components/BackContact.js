
import React from 'react'
import Card from '../Components/Cards'
import data from '../Json'

export default class App extends  React.Component{
  constructor(props) {
    super(props);
    this.state = 
    {
    Data:data,
   
};
  }
  componentDidMount()
  {
    
    
  }
 
render()
{
  

    return(
        
        
       <div style={maindiv}>
         <div style={row}>
         <p style={text1}>FREE SHIPPING ALL OVER PAKISTAN</p>
            <p style={text2}>DELIVERIES MIGHT TAKE LONGER THAN EXPECTED DUE TO COVID-19 PANDEMIC. STAY SAFE.</p>
            <p style={phone}>+92 321 122 4333</p></div> 
            <div  style={line}/>
        
         
       </div>
       
    )
}
}
 
 const maindiv={
    backgroundColor:'#f5f5f5',
    height:'100%',
    width:'100%',
    
  }
const row={
  flexDirection:'row',
  display:'flex'
}
const text1={
  fontSize: 11,
    marginLeft:400,
    fontWeight: '400',
    
    lineHeight: 1,
    
    color: 'rgb(141, 105, 29)'
}
const text2={
  fontSize: 11,
marginLeft:100,
fontWeight: '400',

lineHeight: 1,

color: 'rgb(141, 105, 29)'
}
const phone={
  fontSize: 11,

fontWeight: '400',
marginLeft:100,
lineHeight: 1,

color: 'rgb(141, 105, 29)'
}
const line={

    borderTop: '1px solid gray',
    marginLeft:0,
   
    width:'100%'
}