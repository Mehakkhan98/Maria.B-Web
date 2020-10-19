
import React from 'react'
import data from '../Json';
import Card from '../Components/ZoomCard'
import Contact from '../Components/BackContact'
import Modal from '../Modal/Modal'
const filtered=[]
const Size=["XS","S","M","L","XL"]
export default class App extends  React.Component{
    state={
     
        Data:data,
        increment:1,
        bg:false,
        able:true,
        opendrawer:false
        

      
    }
   
    componentDidMount()
    {
       
       
        this.state.Data.map((d,k)=>{
            
            if(d.itemId=== localStorage.getItem('Id'))
            {
                
                this.setState({filter:d})
                filtered.push(d)
                // window.location.reload()
            }
         
           
        })
    }
    setsize=(e)=>{
       
            this.setState(
                {able:false},
                ()=>console.log(this.state.able))
               
       
   
    }
render()
{
    
    return(
        
        
       <div 
       style={{ backgroundColor:'#f5f5f5',
       height:'100%',
       width:'100%',
       }}
       onClick={()=>{this.setState({opendrawer:false})}}>
           <Contact/>
           <div style={row}>
               <div>
               {
          filtered.map((d,key)=>(
              <div style={{marginTop:30,marginBottom:50,marginLeft:50}}>
                     <Card    
                      data={d} 
                      key={key} 
                      type="ViewDetail" />
              </div>
         
          )

          )
        }
               </div>
               {
            filtered.map((d,k)=>(
                   <div key={k}>
                 <p style={stock}>{d.description}</p>
                 <p style={smalltext}>DW-W20-12-BLACK |  IN STOCK</p>
                 <p style={New}>New</p>
                 <p style={{...stock,marginTop:1}}>{d.price}</p>
                 <p style={{...smalltext,color:'red',marginTop:1}}>Prices are inclusive of the GST.</p>
                 <div style={row}>
                 <div style={row}>
                    <p style={{...stock,marginTop:1}}>Size</p>
                 <p style={SizeText}>| </p>
                 <p style={SizeText}> View Size Guide</p></div>   
                
                 <div style={{...row,marginLeft:-128,marginTop:30}}>
                     {
               Size.map((size,key)=>(
                  <button 
                  onClick={()=>this.setsize(size)}
                  key={key} 
                  style={sizebox}>
                   {size}
                   </button>
                  
               )   )

           }
            
                 </div>
                 <div style={vline}></div>
           
                   
           
            <div style={{...row,marginTop:30,marginLeft:-55}}>
            <p style={{...stock,marginTop:-29}}>Qty</p>
           
                <button style={{...counter,marginLeft:-25}}
                disabled={this.state.able}
                 onClick={()=>{this.setState({increment:this.state.increment+1})}}>+</button>
                
        <p style={{marginLeft:15,marginRight:15,marginTop:2}}>{this.state.increment<0?"0":this.state.increment>9?"9":this.state.increment}</p>
                <button style={counter}
                disabled={this.state.able}
                onClick={()=>{this.setState({increment:this.state.increment-1})}}>-</button>
               
           
            </div>
                 </div>
                
                 <div style={smalltext}>Weight: 1.0 /Kg</div>
               
                <button   style={this.state.bg===false?btn:btn1}
                 disabled={this.state.able}
                   onMouseOver={()=>{this.setState({bg:true})}}
                   onMouseOut={()=>{this.setState({bg:false})}}
                  onClick={() => {
                  this.setState({opendrawer:true})
    }}>
          Add to Bag
        </button>
        {
            this.state.opendrawer===true?<Modal/>:null 
        }
               
               
                
              <div style={row}>
                  <p style={New}>Disclaimer </p>
                  <p style={text1}>Product color may vary slightly due to photographic lighting </p>
              </div>
              <p style={text2}>or your device settings.</p>
              <p style={{...stock,marginTop:10}}>Description</p>
              <p style={{...text1,marginLeft:70}}>4 Piece
Shirt fabric: Net / velvet
Undershirt fabric: linen
Trouser fabric: cambric
Dupatta: Woven shawl
Velvet embroidered Koti with the attached net paneled frock, 
embroidered sleeves and border, 
printed undershirt with straight trouser and woven shawl </p>
                 </div>
                
           ))}
                 
              
                   </div>
                  
           
          
           
       </div>
       
    )
}
}
 
const stock={
    fontSize: 21,
        lineHeight: 1,
        color: '#000',
        letterSpacing: '.02em',
        fontFamily: 'FuturaStd-Light',
        float: 'none',
        fontWeight: 'normal',
        textTransform: 'none',
        padding: 0,
        marginTop: 70,
       marginLeft:70
}
const smalltext={
    fontSize: 10,
fontWeight: '400',
lineHeight: 1,
color: 'rgba(0, 0, 0, 0.5)',
marginTop:10,
marginLeft:70
}
const New={
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 1,
    marginLeft:70,
    color: 'red'
}
const SizeText={
 marginLeft:10,
 fontSize:10,
 fontWeight:'400',
 marginTop:4,color:' rgb(141, 105, 29)'
   
}
const sizebox={
    height:25,
    width:25,
    fontSize:12,
    border:'1px solid  rgb(99, 99, 99)',
    marginRight:10,
    textAlign:'center'
}
const row={
    display:'flex',
    flexDirection:'row',
}
const vline={
    marginLeft:20,
    borderLeft: '1px solid gray',height: 70
}
const hline={
    borderTop: '1px solid rgb(141, 105, 29)',
     marginTop:5,
    width:50
}
const counter={
    height:22,
    width:22,
    borderRadius:12,
    border:'1px solid  rgb(99, 99, 99)',
    marginTop:5,
    color:' rgb(141, 105, 29)'
}
const btn={
    height:50,
    width:300,
    fontWeight:'400',
    background:'black',
    color:'white',
   alignContent:'center',
   alignItems:'center',
   marginTop:40,
   opacity:3,
   marginLeft:70
}
const btn1={
    height:50,
    width:300,
    fontWeight:'400',
    background:'rgb(141, 105, 29)',
    color:'white',
   alignContent:'center',
   alignItems:'center',
   marginTop:40,
   opacity:3,
   marginLeft:70
}
const text1={
    color:'gray',
    fontSize:12,
    marginTop:15,
    marginLeft:10,
    width:320
}
const text2={
    color:'gray',
    fontSize:12,
    marginLeft:70,marginTop:-10
}