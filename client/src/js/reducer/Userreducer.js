import {SING_IN,USER_NAME,ALL_USERS} from '../action/actionUser'
 

 
export const Userreducer = (state = {} ,action) =>{

switch(action.type){
case SING_IN :
  return { ...state ,token : action.payload.token , id : action.payload.id}
  case USER_NAME :
      return   action.payload
default :
return state

}


}