import React, { useState ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import{adminusers} from '../js/action/actionUser'
import api from '../service/api'

function AdminInterface() {
   const userid = localStorage.getItem('Userid')
   const user = localStorage.getItem('user')
   const r = localStorage.getItem('role')
const all = useSelector(state =>state.Adminreducer)
const dispatch = useDispatch()

useEffect(()=>{
dispatch(adminusers(user,userid))
},[])


    return (

<div style={{marginTop:'110px'}}>
        {r==0 ? <h1 className='App' style={{color:'black'}}>u dont have the authoritie to be here</h1> :


        
        <div>



        <div className="w3-container w3-flat-amethyst" style={{maxWidth:'120px' ,borderRadius:'20px' , display:'flex'}}>
               <h1>users</h1> 
            </div>
            
            <div className="w3-display-container w3-row-pading" >
            {
               all.map(el =>(
               
                <div className="w3-card-4" style={{maxWidth:'300px',height:'100px' , margin:'20px',backgroundColor:'red',borderRadius:'20px',boxShadow:'0 20px 50px rgba(59, 43, 91, 0.7)'}}>
                <div className="w3-container w3-center">
               <h4>Name: {el.firstname} {el.lastname}</h4>
               <h4>Email : {el.email}</h4>
               <h4>userid : {el._id}</h4>
               <h4>role : {el.role}</h4>
                </div>
              </div>
                
               )) 
            }
        
</div>


        </div>
}
</div>
    )
}

export default AdminInterface
