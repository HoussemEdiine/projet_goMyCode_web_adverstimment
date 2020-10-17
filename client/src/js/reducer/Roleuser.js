import {ROLE_USERS} from '../action/actionUser'

export const Roleusers = (state=0 , action) =>{
switch(action.type){
    case ROLE_USERS :
        localStorage.setItem('role',action.payload.role)
        return   action.payload.role
        default:
            return state
}
}