import {ROLE_USERS} from '../action/actionUser'

export const Roleusers = (state=0 , action) =>{
switch(action.type){
    case ROLE_USERS :
        return action.payload
        default:
            return state
}
}