import {HOME_PRODUCT} from '../action/action'
import Products from '../../pages/Products'
 
const initialstate = 
{
    home :[]
}


export const Homereducer = (state = initialstate ,action) =>{
switch(action.type){
    case HOME_PRODUCT :
      return  {home : action.payload}
    default : 
    return state
}

}