import React,{useState,useEffect}from 'react'
import {useHistory,Redirect} from 'react-router-dom'
import{Button,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,span } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import{userdislay, adminrole} from '../js/action/actionUser'
function Navig() {
  const role = useSelector(state=>state.Roleusers)
   useEffect(()=>{
localStorage.setItem('role',role)
   },[role])
  
    const [r , setr] = useState(0)
    const User = localStorage.getItem('user')
    const userid=localStorage.getItem('userid')
  
    const [collapsed, setCollapsed] = useState(true);
    const history = useHistory()
  console.log(userid)
   const dispatch = useDispatch() 
   const username =  useSelector(state => state.Nameuserreducer)


   useEffect(()=>{ 
  dispatch(userdislay(userid,User))
 
  
   },[])
   useEffect(()=>{
    dispatch(adminrole(userid,User))
    

  
   },[])
   //role 
console.log(r)



  const toggleNavbar = () => setCollapsed(!collapsed);
    const logout =  () =>{
        localStorage.removeItem('user')
        localStorage.removeItem('userid')
        localStorage.removeItem('role')
        window.location='/login'
      }

      const login = () => {
        window.location='/login'
        }

    return (
        <div>
    
        <Navbar color="red" light style={{backgroundColor:"snow"}}>
        <NavbarBrand href="/" className="mr-auto"><img src={'icons8-tags-80.png'} style={{width:"20px" , height:"20px" , marginTop:'-10px'}}/><b>Selling Electronics</b></NavbarBrand>
    {User ? <div><span ><b>{username}</b></span>   <Button onClick={logout} color='danger'>Logout</Button></div>: <Button onClick={login} color='success'>login</Button>}
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/"><img src={'icons8-home-64.png'} style={{width:"20px" , height:"20px" , marginTop:'-10px'}} /><span style={{marginBottom:"9px"}}><b>Home</b></span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/dashbord'><b>Dashbord</b></NavLink>
             {User ? <NavLink href='/product'><b>Add Product</b></NavLink> : ''}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        



        </div>
    )
}

export default Navig
