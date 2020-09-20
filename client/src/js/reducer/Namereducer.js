import {USER_NAME} from '../action/actionUser'

const initialstate = ""
 
export const Nameuserreducer  = (state=initialstate ,action) =>{

    switch(action.type) {
   case USER_NAME :
       return action.payload
    default : 
    return state

    }

}