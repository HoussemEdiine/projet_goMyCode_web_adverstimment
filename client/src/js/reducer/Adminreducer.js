import {ALL_USERS} from "../action/actionUser"

export const Adminreducer = (state=[],action)=>{
    switch(action.type){
        case ALL_USERS: 
        return action.payload
        default:
            return state



    }
}