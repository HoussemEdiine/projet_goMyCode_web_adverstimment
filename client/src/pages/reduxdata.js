import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getproduct} from '../js/action/action'
import  Cardhome from './Card/HomeCard'


const DisplayData = () =>{
const user =localStorage.getItem('user')
const dispatch = useDispatch()    
const produit  = useSelector(state => state.ProductReducer)
 useEffect(() => {
     dispatch(getproduct())
 }, [])
console.log(produit)

return(
      <div style={{display:'flex' ,flexDirection:'row' }}> 
    { user ? 
    produit.map((el,index)=>( 
      <Cardhome key={index} el={el}/> )
    )
    :
    <div className='App'>
    <h1>Welcome to our shoping web site </h1>
       </div>
} 
    </div>

)


}
export default DisplayData 