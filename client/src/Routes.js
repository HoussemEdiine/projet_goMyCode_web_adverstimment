import React,{useState,useEffect,} from 'react'
import { Switch , BrowserRouter ,Route,useParams} from 'react-router-dom'
import Login from './pages/Login';
import Dashbord from './pages/Dashbord';
import  Registration from './pages/Registration'
import Products from './pages/Products'
import Privateroute from './pages/Privateroute'
import Myproduct from './pages/Myproduct'
import DisplayData from './pages/reduxdata'
import Navig from './pages/Navbar'
import  AdminInterface from './pages/adminInterface'
import {useDispatch,useSelector} from 'react-redux'
import {getproduct} from './js/action/action'
import Productdetlais from "./pages/productdetails"
 



const Page404 = () => <h1 style={{color:'black'}}>404 not found</h1>

export default function Routes() {
   
    //states
   const [product,setproduct]=useState([])
   const [status , setstatus]=useState(0)
   const dispatch = useDispatch()    
   const produits  = useSelector(state => state.ProductReducer)
    useEffect(() => {
        dispatch(getproduct())
    }, [])
     console.log(produits)
   
      

    return (
    
          
           
        <BrowserRouter>
     
       <Navig/>
        <Switch>
         <Route path='/login' exact component={Login}/>
         <Privateroute path='/dashbord' exact render={()=> (<Dashbord produit={produits}/>)}/>
         <Route path='/register' exact component={Registration} />
         <Route path='/product'exact component={Products}/>
         <Route path='/myproduct' exact component={Myproduct}/>
         <Route path='/' exact component={DisplayData}/>
         <Privateroute path='/admin' render={()=><AdminInterface/>}  />
         <Route path='/details/:userid'exact render={({match})=><Productdetlais match={match}/>} />
         <Route component={Page404} />
        </Switch>
        
         </BrowserRouter>

    )
}
