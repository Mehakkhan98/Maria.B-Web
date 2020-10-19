
import React from 'react'
import  { Redirect } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
export default class App extends  React.Component{
  constructor(props) {
    super(props);
    this.state = 
    {
    
    
    view1:false,
    view2:false
};
  }
  
render()
{
    
    return(
        
        
       <div style={Card}>
          
        {
            this.state.view1===true?
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: this.props.data.itemimage2
                },
                largeImage: {
                    src: this.props.data.itemimage2,
                    width: 1200,
                    height: 1800
                }
            }} />:
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: this.props.data.itemimage1
                },
                largeImage: {
                    src: this.props.data.itemimage1,
                    width: 1200,
                    height: 1800
                }
            }} />
        }
          
         <img height="80" width="60" style={{position:'absolute',top:600,border: '5px solid #555',marginLeft:10}} 
          
          src={this.props.data.itemimage2} 
       
          onClick={() => {
              this.setState({view1:true,view2:false})
             
          }}
        alt="Logo" />
         <img height="80" width="60" style={{position:'absolute',top:490, border: '5px solid #555',marginLeft:10}} 
          
          src={this.props.data.itemimage1} 
          onClick={() => {
              this.setState({view2:true,view1:false})
             
          }}
        alt="Logo" />
      
         
  
     
       </div>
       
    )
}
}
 
const Card={
  height:500,width:350,borderWidth:1,borderColor:'gray',
       marginRight:15,marginLeft:15,boxShadow: "2px 2px 2px 2px #c9c9c9",
       backgroundColor:'white',marginBottom:10,marginLeft:10
}

