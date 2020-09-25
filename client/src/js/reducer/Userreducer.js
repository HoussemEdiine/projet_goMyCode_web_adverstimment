import {SING_IN,USER_NAME,ALL_USERS} from '../action/actionUser'
 

 
export const Userreducer = (state = {} ,action) =>{

switch(action.type){
case SING_IN :
  localStorage.setItem('user',action.payload.token)
  localStorage.setItem('Userid', action.payload.id)
  return { ...state ,token : action.payload.token , id : action.payload.id}
  case USER_NAME :
      return   action.payload
default :
return state

}


}