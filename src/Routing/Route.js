
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import NewArrival from '../Screens/NewArrival';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Detail from '../Screens/Detail'
 export default class Routes extends React.Component{
    
     render()
    
     {
       
         
         return(
             <div>
      
            <Router>
            <Header/>
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/newcollection" component={NewArrival} />
            <Route path="/viewdetail" component={Detail} />
            
            <Footer/>
           
           
           
           
        </Router>
     
        
        </div>
      
         )
     }
 
 }
