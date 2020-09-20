import api from '../../service/api'
export const SING_IN = 'SING_IN'
export const USER_NAME = 'USER_NAME'
export const USER_ID = 'USER_ID'
export const ALL_USERS='ALL_USERS'
export const ROLE_USERS ='ROLE_USERS'
//
export const singin  =(email ,password) => async (dispatch) =>{

   await api.post('/login',{email , password})
     .then ( res =>dispatch({type:SING_IN , payload:{token : res.data.user , id : res.data.user_id}}))
     .catch(err=>alert(err.response.data.message))
   
}
  
export const userdislay = (id,user) => (dispatch) =>{
  api.get(`/user/${id}`,{headers:{user : user}})
  .then(data =>(dispatch({type:USER_NAME , payload:data.data.authData.user.firstname})))
  
}
export const adminusers =(user,userid) => async (dispatch)=>{
   await api.get(`/users`,{headers:{user:user,userid:userid}})
  .then(data=>dispatch({type:ALL_USERS , payload:data.data}))

}

export const adminrole = (id,user) => async (dispatch) =>{
 const data = await  api.get(`/user/${id}`,{headers:{user : user}})
  .then(data =>(dispatch({type:ROLE_USERS , payload:data.data.authData.user.role})))
  
}
