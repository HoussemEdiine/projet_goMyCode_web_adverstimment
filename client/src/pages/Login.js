import React , { useState,useEffect} from 'react'
import {useDispatch,useSelector} from  "react-redux"
import{Redirect} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input ,Container} from 'reactstrap';
import {singin, userID} from '../js/action/actionUser'
import {Spinner} from 'reactstrap'
//import api from '../service/api'

function Login({history}) {

 const  dispatch = useDispatch()
 const data = useSelector(state => state.Userreducer)

 const [email , setEmail]=useState('')
 const [password , setPassword]=useState('')
 const handleSubmit  = async (evt) => {
   evt.preventDefault()
       await dispatch(singin(email,password,history))
       
 }

 
 const handleChange = (e) =>{
     setEmail(e.target.value)
  }
  
    
  
  /// auth
  if(data.token){
     window.location='/dashbord'
    }

   
          console.log(data.token)
 

 
    return (
      
      <div className="logincontainer">
      <div className="login"> 
        <Form  onSubmit={handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="email" className="tml-label">Email</Label>
          <Input type="email" name="email" value={email}   onChange={handleChange}  placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Password" className="tml-label">Password</Label>
          <Input type="password" value={password} name="password" placeholder="don't tell!" onChange={(e)=>setPassword(e.target.value)} />
        </FormGroup>
        <div style={{marginTop:'10px',alignItems:'center'}}>
           <Button type='submit'>Login</Button>
        <Button onClick={()=>history.push('/register')} style={{marginLeft:'20px'}} >Register</Button>
        </div>
       
      </Form>
     </div>
    
    </div>
     
    )
}

export default Login

