import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Fade, Input } from 'reactstrap'
import {gethomeproduct} from '../js/action/action'
import  Cardhome from './Card/HomeCard'






const DisplayData = () =>{
const dispatch = useDispatch()    
const produit  = useSelector(state => state.Homereducer.home)
 useEffect(() => {
     dispatch(gethomeproduct())
 }, [])
console.log(produit)


return(
  <div>

     <h1 style={{color:'black'}} className='App'>Online advertising </h1>
    
     <div style={{marginLeft:'1000px',marginTop:'90px'}}>
       <h3>How it s work ? </h3>
       <p>if u wand to sell somethning just create an account
         go to the dashbord and click add product , then add all the 
         infomation about the stuff that you will sell , its simple as that .
       </p>
     </div>
     <div style={{marginLeft:'1000px',marginTop:'80px'}}>
       <h3>is it free ?</h3>
       <p>Our website is free to use for any one  . </p>
       </div>
       <div style={{marginLeft:'1000px',marginTop:'70px'}}>
         <h3>what features we will add in the near future ?</h3>
         <p> we will add as soon as possible a rating system , chat and comment system 
           to improve the interaction with the website </p>
         </div>
       
      <div className='containerhome'> 
    { 
    produit.map((el,index)=>( 
      
      <Fade bottom top >
        <Cardhome key={index} el={el} /> 
      </Fade>

      )
    )

} 
  
    </div>
</div>
)


}
export default DisplayData 