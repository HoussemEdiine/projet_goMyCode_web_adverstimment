import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {gethomeproduct} from '../js/action/action'
import Fade from "react-reveal/Fade";

function Productdetails({match:{params}}) {
     console.log(params.userid.substring(1))
     const dispatch = useDispatch()    
     const produit  = useSelector(state => state.Homereducer.home)
     useEffect(() => {
         dispatch(gethomeproduct())
     }, [])
    console.log(produit)
    const details = produit.filter(el =>{
        return el._id === params.userid.substring(1)
    })
    console.log(details)
    return (
    
        <div class="w3-container" style={{width:'500px' , height:"500px" , marginLeft:'450px' ,marginTop:'40px'}}>
               {
            details.map(el =>(

                
            <div key={el._id}>
                
                <div className='image'>
     <img src={el.img_url}  height='10px' width='10px' className="movie-img"/>
        </div>
               <Fade bottom> 
               
              <h2 style={{color:'red'}}>Product: {el.name}</h2> 
               <p>category: {el.category}</p> 
               <p>discription :  {el.discription}</p>
            <p> Price :{el.price}$ </p>
            <p>phone : {el.tel}</p>
            <p>region :{el.region}</p>
         </Fade>  
        
      
        
            </div>  
        
            ))
               } 
        </div>
   )
}

export default Productdetails
