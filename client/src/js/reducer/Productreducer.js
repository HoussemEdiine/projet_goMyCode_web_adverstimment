import {GET_PRODUCT,HOME_PRODUCT} from '../action/action'
import Products from '../../pages/Products'
 
const initialstate = 
[]


export const ProductReducer = (state = initialstate ,action) =>{
switch(action.type){
    case GET_PRODUCT :
      return  action.payload
    default : 
    return state
}

}