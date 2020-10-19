
import React from 'react'
import Search from '../Components/SearchBox'

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
    
        <div style={{...headerdiv1,height:140,marginBottom:3}}>
                <div style={row}>
                <div 
                style={search}>
                <Search/>
                </div>
       <div style={{position:'absolute',left:600}}>
       <p style={topic}>Maria.B</p>
       </div>
         <div style={{position:'absolute',left:1200,top:30,...row}}>
         <MyLink  CustomStyle={{marginTop:100,...headerlink}} data=" Account" page="/"/>
            
  
             <IconButton style={headerlink}>
             <HttpsIcon/>
             </IconButton>
             
         </div>
        
                </div>
             <ul list-style-type="none" style={{...headerdiv1,height:100}}>
              
              <MyLink 
                CustomStyle={{...link, left:110}}
                data=" NEW ARRIVALS" page="/newcollection"/> 
              
                
                     <li  
                     onMouseEnter={()=>this.setState({unstitched:true})} onMouseLeave={()=>this.setState({unstitched:false})}
               style={{...list, left:290,}} >
                   UNSTITCHED FABRICS
                   {this.state.unstitched===true? <ul style={dropdown}>
      <li style={inlist}> <MyLink 
                CustomStyle={{...inlink ,marginLeft:0,top:0 }}
                data="Mbroidered" page="/"/> </li>
      <li style={inlist}> <MyLink 
                CustomStyle={{...inlink ,marginLeft:0,top:3 }}
                data="Lawn" page="/"/> </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 ,marginTop:10,marginBottom:10}}
                data="Linen" page="/"/>   </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Silk" page="/"/>  </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="M .Prints" page="/"/>  </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Sateen" page="/"/>   </li>
      <li style={inlist}> <MyLink 
                CustomStyle={{...inlink ,marginLeft:0,bottom:0,position:'absolute'}}
                data="View All" page="/"/> </li></ul>:null}</li>
               
                  
               <li onMouseEnter={()=>this.setState({readytowear:true})}  onMouseLeave={()=>this.setState({readytowear:false})}
               style={{ 
               left:450,...list}} >
                   READY TO WEAR
                   {this.state.readytowear===true? <ul style={dropdown} >
                 <li style={inlist}>
                   <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Evening Wear" page="/"/>  </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Casuals" page="/"/>  </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Mommy & me" page="/"/>  </li>
      <li style={inlist}> <MyLink 
                CustomStyle={{...inlink ,marginLeft:0,bottom:0,position:'absolute'}}
                data="View All" page="/"/> </li> </ul>:null}</li>
                   <li onMouseEnter={()=>this.setState({kids:true})} onMouseLeave={()=>this.setState({kids:false})}
               style={{ ...list,  left:590 }} > 
               KIDS 
               {this.state.kids===true?
               <ul style={dropdown} >
      <li style={inlist}>
                   <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Kids" page="/"/>  </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Mommy & me" page="/"/> </li>
    
      <li style={inlist}> <MyLink 
                CustomStyle={{...inlink ,marginLeft:0,bottom:0,position:'absolute'}}
                data="View All" page="/"/> </li> </ul>:null} 
               </li> 
               <MyLink  
                CustomStyle={{...link, left:620 }}
               data=" COUTURE" page="/Home"/>
               
               <li  onMouseEnter={()=>this.setState({weddingwear:true})} onMouseLeave={()=>this.setState({weddingwear:false})}
                style={{...list,left:780,}}>
                   WEDDING WEAR
                 {this.state.weddingwear===true? <ul style={dropdown} >
                 <li style={inlist}>
                   <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Bridal" page="/"/>  </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Formal" page="/"/>   </li>
      <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Mehndi" page="/"/>  </li>
      <li style={inlist}> <MyLink 
                CustomStyle={{...inlink ,marginLeft:0,bottom:0,position:'absolute'}}
                data="View All" page="/"/> </li>  </ul>:null}   </li>
                   <li
                   onMouseEnter={()=>this.setState({stitched:true})}  onMouseLeave={()=>this.setState({stitched:false})}
               style={{
                ...list, left:920 }} > 
               STITCHED
               {this.state.stitched===true? <ul style={dropdown}>
               <li style={inlist}>
      <MyLink 
                CustomStyle={{...inlink ,marginLeft:0 }}
                data="Stitched M.Print" page="/"/> 
      </li>
      <li style={inlist}> <MyLink 
                CustomStyle={{...inlink ,marginLeft:0,bottom:0,position:'absolute'}}
                data="View All" page="/"/> </li>
    </ul>:null} </li> 
               <MyLink   
                CustomStyle={{...link, left:970 }}
               data=" PERFUMES" page="/Home" />
              
               <MyLink
                CustomStyle={{  ...link, left:1070 }}
                data="SALE" page="/Home" />
               
            </ul>
           
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
  position:'absolute'
}
const search={
  top:40,
  left:80,
  position:'absolute'
 ,width:160
}
const topic={
  fontSize:48,
  fontWeight:'400',
  fontStyle:'italic',
   position:'absolute',
   top:-40,
  color: 'rgb(141, 105, 29)'
}
const link={
  fontSize:12,
  fontWeight:'400',
  lineHeight:18,
  position:'absolute',
  top:25,
  color: 'rgb(141, 105, 29)',
 marginLeft:50,textDecoration:'none'
}
const inlink={
  fontSize:14,
  fontWeight:'400',
  lineHeight:2,
  marginTop:10,
  marginBottom:10,
  color: 'rgb(141, 105, 29)',
 textDecoration:'none'
}
const headerlink={
  fontSize:16,
  fontWeight:'400',
  lineHeight:3,
  textDecoration:'none',
  color: 'rgb(141, 105, 29)'
}
const list={
  fontSize:12,
  listStyleType: "none",
  fontWeight:'400',
  lineHeight:18,
  position:'absolute',
  color: 'rgb(141, 105, 29)',
 marginTop:10,textDecoration:'none'
}
const dropdown={
  position: 'absolute',
  left: 0,
  padding:20,
  top: 132,
  width: 140,
  background: '#fff',
  border: 'none',
  boxShadow: '0 5px 3px -3px rgba(0,0,0,.3) inset',
  textAlign: 'left',
  fontFamily: 'FuturaStd-Book',
  minHeight: 260
}
const inlist={
  fontSize:12,
  listStyleType: "none",
  fontWeight:'400',
  lineHeight:2,
  color: 'rgb(141, 105, 29)',
 marginTop:10,
 marginBottom:10,
 textDecoration:'none'
}