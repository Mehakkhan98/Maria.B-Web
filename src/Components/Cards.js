
import React from 'react'
import  { Redirect } from 'react-router-dom'
export default class App extends  React.Component{
  constructor(props) {
    super(props);
    this.state = 
    {
    
    rotate:"",
    view:false
};
  }
  changeimage=()=>{
    this.setState({rotate:this.props.data.itemimage1})
   
  }
  reverse=()=>{
    this.setState({rotate:""})
   
  }
render()
{
    
    return(
        
        
       <div style={Card}>
           
           {this.state.rotate===this.props.data.itemimage1?
            <img height="80%" width="100%" 
          
            src={this.props.data.itemimage2} 
            onMouseEnter={this.changeimage}
            onMouseLeave={this.reverse}
            onClick={() => {
              this.setState({view:true})
              localStorage.clear();
              localStorage.setItem('Id', this.props.data.itemId);
          }}
              
          alt="Logo" />
            :  <img height="80%" width="100%" 
          
            src={this.props.data.itemimage1} 
            onMouseEnter={this.changeimage}
            onMouseLeave={this.reverse}
            onClick={() => {
                this.setState({view:true})
               
            }}
          alt="Logo" />
           }
           
        
         
         
          <p style={description}>{this.props.data.description}</p>
     <div style={{...row,justifyContent:'space-between'}}>
     <p style={Size}>{this.props.data.size}</p>
     <p style={price}>{this.props.data.price}</p>
      
        
      
        
      
         </div>
  
      {this.state.view===true?<Redirect to='/viewdetail' />:null}
       </div>
       
    )
}
}
 
const Card={
  height:500,width:300,borderWidth:1,borderColor:'gray',
       marginRight:15,marginLeft:15,boxShadow: "2px 2px 2px 2px #c9c9c9",
       backgroundColor:'white',marginBottom:10,marginLeft:10
}
const description={
  fontSize: 16,
  fontWeight: '500',lineHeight:1,
  color: 'rgb(0, 0, 0)',marginLeft:10,marginBottom:30}
  const price={
    fontSize: 14,
fontWeight: 400,
marginRight:10,
lineHeight: 0,
color: 'rgb(0, 0, 0)'
  }
  const Size={
    fontSize: 10,
marginLeft:10,
fontWeight: 400,
lineHeight: 1,
 color: 'rgba(0, 0, 0, 0.5)'
  }
  const row={
    display:'flex',
    flexDirection:'row'
  }