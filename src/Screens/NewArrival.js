
import React from 'react'
import Card from '../Components/Cards'
import data from '../Json'
import Contact from '../Components/BackContact'
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
         <Contact/>
      <div style={{...row,marginLeft:30}}>
        {
          this.state.Data.map((d,key)=>(
            <div style={{marginBottom:50,marginTop:10}}>
               <Card 
               type="All"
               data={d}
                key={key}  />
            </div>
           
          )

          )
        }
     
            
          
           
      </div>
        
         
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

