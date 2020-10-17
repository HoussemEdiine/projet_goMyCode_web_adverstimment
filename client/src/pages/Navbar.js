import React,{useState,useEffect}from 'react'
import {useHistory,Redirect , Link} from 'react-router-dom'
import{Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,span } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import{userdislay, adminrole} from '../js/action/actionUser'
import {Button}from '@material-ui/core';


function Navig() {

    const User = localStorage.getItem('user')
    const userid=localStorage.getItem('Userid')
    const r =localStorage.getItem('role')
  
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
        localStorage.removeItem('Userid')
        localStorage.removeItem('role')
        window.location='/login'
      }

      const login = () => {
        history.push('/login')
        }
console.log(User)
    return (


        <div>
        <Navbar color="red" light className='w3-light-grey' style={{ position: 'fixed',
  top: '0',
  width: '100%'}}>
        <NavbarBrand href="/" className="mr-auto"><img src={'icons8-tags-80.png'} style={{width:"20px" , height:"20px" , marginTop:'-10px'}}/><b>Selling Online</b>
        </NavbarBrand>
        {User && r == 1 ? <NavLink href='/admin'><b>Admin interface</b></NavLink> : ''}
       {User ? <div><span ><b>{username}</b></span><Button onClick={logout} color='danger'>Logout</Button></div> : <Link to="/login">Login</Link>}
       
       
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <NavLink href="/"><img src={'icons8-home-64.png'} style={{width:"20px" , height:"20px" , marginTop:'-10px'}} /><span style={{marginBottom:"9px"}}><b>Home</b></span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/dashbord'><b>Dashbord</b></NavLink>
             {User  ? <NavLink href='/product'><b>Add Product</b></NavLink> : ''}

            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        



        </div>
    )
}

export default Navig
