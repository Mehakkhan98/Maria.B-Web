import React from "react";
import Sidebar from "react-sidebar";
 import Header from '../Components/ModalHeader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
     
        sidebar={<div>
        <Header   cancel={()=>{this.setState({sidebarOpen:false})}}/>
        <div style={row}>
        <img height="80" width="60" style={img} 
          
          src="data:image/jpeg;base64,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"
         
        alt="Logo" />
        <div>
        <p style={attribute}>
         Suit Black DW-W20-12
        </p>
        <p style={{marginLeft:80,fontSize:8,marginTop:-10,}}>
        DW-W20-12-BLACK |  IN STOCK
        </p>
        <p style={{...attribute,marginTop:-5}}>Color : Black</p>
        <p style={{...attribute,marginTop:-7}}>Size :  M</p>
        <div style={row}>
        <p style={{...attribute,marginTop:-7}}>Qty  :  1</p>
        <p style={{...attribute,marginTop:-7,marginLeft:130}}>PKR 14,000</p>
        </div>
       
        </div>
        


        </div>
        <div style={{display:'flex',flexDirection:'row',position:'absolute',bottom:45}}>
           <p style={{...attribute,marginLeft:20}}>Total</p> 
           <p style={{...attribute,marginLeft:200}}>PKR 14,000</p>
        </div>
        <button   style={checkout}
                 disabled={this.state.able}
                   onMouseOver={()=>{this.setState({bg:true})}}
                   onMouseOut={()=>{this.setState({bg:false})}}
                  onClick={() => this.onSetSidebarOpen(true)}>
          Check Out
        </button>
            </div>}
        open={this.state.sidebarOpen}
        transitions={true}
        pullRight={true}
        shadow={true}
       touch={true}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar:
        { background: "white" ,width:330,
      //  marginTop:400,marginLeft:70
    } }}
      >
         
          {/* <button   style={this.state.bg===false?btn:btn1}
                 disabled={this.state.able}
                   onMouseOver={()=>{this.setState({bg:true})}}
                   onMouseOut={()=>{this.setState({bg:false})}}
                  onClick={() => this.onSetSidebarOpen(true)}>
          Add to Bag
        </button> */}
       
       
      </Sidebar>
    );
  }
}
 
export default App;
const btn={
    height:50,
    width:300,
    fontWeight:'400',
    background:'black',
    color:'white',
    // marginTop:700,
    // marginLeft:500,
   opacity:3,

}
const btn1={
    height:50,
    width:300,
    fontWeight:'400',
    background:'rgb(141, 105, 29)',
    color:'white',
    // marginTop:700,
    // marginLeft:500,
   opacity:3,

}
const checkout={
    height:50,
    width:330,
    fontWeight:'400',
    background:'rgb(141, 105, 29)',
    color:'white',
   marginTop:40,
   opacity:3,
   position:'absolute',
   bottom:0
   
}
const attribute={
    marginLeft:80,
    marginTop:25,
    fontSize:11,
    fontWeight:'bold',
    color:'black'
}
const img={
  position:'absolute',
  top:100,
   border: '2px solid #555',
   marginLeft:10
}
const row={
    display:'flex',
    flexDirection:'row',
    
}