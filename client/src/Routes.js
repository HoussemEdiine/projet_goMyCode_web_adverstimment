import React,{useState} from 'react'
import { Switch , BrowserRouter ,Route} from 'react-router-dom'
import Login from './pages/Login';
import Dashbord from './pages/Dashbord';
import  Registration from './pages/Registration'
import Products from './pages/Products'
import Privateroute from './pages/Privateroute'
import Myproduct from './pages/Myproduct'
import DisplayData from './pages/reduxdata'
import Navig from './pages/Navbar'
import  AdminInterface from './pages/adminInterface'
export default function Routes() {
  

  

    return (

          
           
        <BrowserRouter>
     
       <Navig/>

        <Switch>
         <Route path='/login' exact component={Login}/>
         <Privateroute path='/dashbord' component={Dashbord}/>
         <Route path='/register' exact component={Registration} />
         <Route path='/product'exact component={Products}/>
         <Route path='/myproduct' exact component={Myproduct}/>
         <Route path='/' exact component={DisplayData}/>
         <Route path='/admin' exact component={AdminInterface}  />
        </Switch>
        
         </BrowserRouter>

    )
}
