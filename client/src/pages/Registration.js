import React,{useState} from 'react'
import { Form, Label} from 'reactstrap';
import api from '../service/api'
import { Input ,Button,FormGroup} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


function Copyright() {
return (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
}
function Registration({history}) {
    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')
    const [firstname , setFirstname]=useState('')
    const [lastname , setLastname]=useState('')

    const handleSubmit = async (evt) =>{
        evt.preventDefault()
    api.post('/register',{email , password,firstname,lastname})
    .catch(err => alert(err.response.data.message))

       history.push('/')
   } 
   
     

    return (
      <div className='logincontainer'>
      <div className="login">
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">firstname</Label>
          <Input type="text" name="firstname"  placeholder="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Lastname</Label>
          <Input type="text" name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="lastname" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" value={email}   onChange={e => setEmail(e.target.value)}  placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input  type="password" value={password} name="password" placeholder="don't tell!" onChange={(e)=>setPassword(e.target.value)} />
        </FormGroup>
      
        
        <Button onClick={handleSubmit}   style={{marginTop:'15px'}} variant="contained" color="primary">register</Button>
      </Form>
      
      
</div>
</div>
    )
}

export default Registration
