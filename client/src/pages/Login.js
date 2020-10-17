import React , { useState,useEffect} from 'react'
import {useDispatch,useSelector} from  "react-redux"
import{Redirect} from 'react-router-dom'
import { Form} from 'reactstrap';
import {singin, userID} from '../js/action/actionUser'
import {Spinner} from 'reactstrap'
import { Input ,Button, FormGroup ,InputLabel,TextField } from '@material-ui/core';
//import api from '../service/api'
import icons from 'glyphicons'

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
         <p><b> {icons.door} Login for selling</b></p>
          </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
         <TextField type="email"  variant='outlined' label="email" name="email" value={email}   onChange={handleChange}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{marginTop:'10px'}}>
          <TextField type='password' id="outlined-basic" label="Password" variant="outlined"  value={password} name="password"  onChange={(e)=>setPassword(e.target.value)} />
          </FormGroup>
       
        <div style={{marginTop:'10px',alignItems:'center'}}>

           <Button type='submit'  variant="contained" color="primary" >Login</Button>
        <Button onClick={()=>history.push('/register')} style={{marginLeft:'20px'}} variant="contained" color="primary" >Register</Button>
        </div>

        <div style={{marginTop:'20px',alignItems:'center'}}>
       </div>
      </Form>
      
     </div>
    
    </div>
     
    )
}

export default Login

