import {GET_PRODUCT,DELT_PRODUCT, EDIT_PRODUCT} from '../action/action'
import Products from '../../pages/Products'
 
const initialstate = 
[]


export const ProductReducer = (state = initialstate ,action) =>{
switch(action.type){
    case GET_PRODUCT :
      return  action.payload
      case DELT_PRODUCT :
        return state
        case EDIT_PRODUCT :
          return state
    default : 
    return state
}

}