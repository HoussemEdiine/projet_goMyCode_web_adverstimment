import React, { useState ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import{adminusers} from '../js/action/actionUser'
import api from '../service/api'

function AdminInterface() {
    const [role ,setrole] =useState([])
   const userid = localStorage.getItem('Userid')
   const user = localStorage.getItem('user')
   const r = localStorage.getItem('role')
  //  api.get('/users',{headers:{user,userid}})
    //.then(data => setrole(data.data))
const all = useSelector(state =>state.Adminreducer)
const dispatch = useDispatch()

useEffect(()=>{
dispatch(adminusers(user,userid))
},[])


    return (
        <div>
            <h1>All userss</h1>
            {
               all.map(el =>(
                  
                   <div>
                       <div>
                   <span><b>{el.firstname}  {el.lastname}
                   
                   
                   </b></span>
                  </div>
                   
                  </div>
                
               )) 
            }

            
        </div>
    )
}

export default AdminInterface
