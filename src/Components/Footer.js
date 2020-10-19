
import { Button } from '@material-ui/core'
import React from 'react'
import {Link } from 'react-router-dom'
import MyLink from '../Components/MyLink';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
export default class App extends  React.Component{
render()
{
    
    return(
       <div style={Footer}>
           <div style={row}>
           <div>
            <div style={{...row,marginLeft:40}}>
      <MyLink CustomStyle={link} page="/" data="Unstitched"></MyLink>
      <MyLink CustomStyle={link} data="Returns and Exchange"  page="/"></MyLink>
      <MyLink CustomStyle={{...link,marginLeft:10}} data="About Maria.B" page="/"></MyLink>
            </div>
            <div style={{...row,marginLeft:40}}>
      <MyLink CustomStyle={{...link,marginLeft:30}} data="Ready to wear"  page="/"></MyLink>
      <MyLink CustomStyle={{...link,marginLeft:10}} data="Privacy Policy"  page="/"></MyLink>
      <MyLink CustomStyle={{...link,marginLeft:60}} data="Contact"  page="/"></MyLink>
            </div>
            <div style={{...row,marginLeft:40}}>
      <MyLink CustomStyle={{...link,marginLeft:30 }} data="Kids"  page="/"></MyLink>
      <MyLink CustomStyle={{...link,marginLeft:65}} data="FAQS"  page="/">FAQS</MyLink>
      <MyLink CustomStyle={{...link,marginLeft:100}} data="Store Locator"  page="/"></MyLink>
            </div>
            <div style={{...row,marginLeft:40}}>
      <MyLink CustomStyle={{...link,marginLeft:30}} data="Wedding Wear"  page="/"></MyLink>
      <MyLink CustomStyle={{...link, marginLeft:10}} data="Size Guide"  page="/"></MyLink>
      <MyLink CustomStyle={{...link,marginLeft:70}} data="Career"  page="/"></MyLink>
            </div>
       </div>
       <div>
       <div style={{position:'absolute',right:80}}>
           <p style={signup}>Sign Up for our NewsLetter</p>
        <div style={{...row,marginTop:50}}>
        <input
        style={input}
        placeholder="Enter Your Email Address"
        type='text'
      //  onChange={this.myChangeHandler}
      />
      <Button style={btn}>Subscribe</Button>
        </div>
       </div>
       </div>
       </div>
       <div style={{...row,marginLeft:40,marginTop:40}}>
           <PhoneIcon style={icon}/>
<p style={contact}>+92 321 122 4333</p>
<EmailIcon style={icon}/>
<p style={contact}>help@mariab.ae</p>
<div style={{position:'absolute',right:83,...row}}>
<FacebookIcon style={icon}/>
<p style={contact}>FaceBook</p>
<InstagramIcon style={icon}/>
<p style={contact}>Instagram</p>
<TwitterIcon style={icon}/>
<p style={contact}>Twitter</p>
</div>
       </div>   
       <div  style={line}/>
 <div style={{...row,marginLeft:55}}>
       <p style={{color:'black',fontSize:12,fontWeight:'400'}}>Maria.B</p>
       <p style={text}> All rights reserved © 2020</p>
       <p style={{...text,position:'absolute',right:90}}> Powered by Shopistan</p>
     
       </div>
       </div>
    )
}
}
 
const Footer={
    backgroundColor: "#ffffff",
    
    textAlign: "center",
    marginTop:0,
    padding: "20px",
    
    left: "0",
    bottom: "0",
    height: "60px",
    width: "95%"
}
const row={
    display:'flex',
    flexDirection:'row'
}
const link={
    textDecoration:'none',marginLeft:30,
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 3,
      color: 'rgb(0, 0, 0)',
      marginRight:20
}
const signup={
    position:'absolute',
    right:0,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 1,
    color: 'rgba(0, 0, 0, 0.72)'
}
const input={
    borderWidth:1,
    borderColor:'gray',
    height:30,
    width:300,
    paddingLeft:20,
    color:'rgb(141, 105, 29)'
}
const btn={
    backgroundColor:'rgb(141, 105, 29)',
    width:100,
    borderRadius:0,
    height:34
}
const icon={
    color:'rgb(141, 105, 29)',
    marginRight:10,
    marginTop:10,
    fontSize:20,
    marginLeft:30
}
const contact={
    color:'rgb(141, 105, 29)',
    fontSize:12,
    fontWeight:'400'
}
const text={
    color:'gray',
    fontSize:9,
    fontWeight:'400',
    marginTop:14,
    marginLeft:15
}
const line={

    borderTop: '1px solid rgb(141, 105, 29)',
    marginLeft:60,
   
    width:'93%'
}