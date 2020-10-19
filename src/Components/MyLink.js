
import React from 'react'
import {Link } from 'react-router-dom'
export default class App extends  React.Component{
render()
{
    
    return(
        
        
       <div>
           <Link style={this.props.CustomStyle} to={this.props.page}>
             {this.props.data}
            
             </Link>
      
       </div>
       
    )
}
}
 
