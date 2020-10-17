import{createStore,compose,applyMiddleware,combineReducers} from 'redux'
import thunk from "redux-thunk"
import {ProductReducer} from './js/reducer/Productreducer'
import {Homereducer} from './js/reducer/Homereducer'
import {Userreducer} from './js/reducer/Userreducer'
import  {Nameuserreducer} from './js/reducer/Namereducer'
import{Adminreducer} from './js/reducer/Adminreducer'
import {Roleusers} from './js/reducer/Roleuser'
import { Form } from 'reactstrap'
const middleWare=[thunk]
 const devTool =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// combine reducer 
const reducer = combineReducers({ProductReducer,Userreducer,Nameuserreducer,Adminreducer,Roleusers,Homereducer})

 const store = createStore(reducer,compose(applyMiddleware(...middleWare),devTool))
  
 export default store