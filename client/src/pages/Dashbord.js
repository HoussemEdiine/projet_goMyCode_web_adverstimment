import React , {useState,useEffect,}  from 'react'
import {useHistory} from 'react-router-dom'
import  {Button} from 'reactstrap'
import {Input} from  'reactstrap'
import {useDispatch,useSelector} from 'react-redux'
import api from '../service/api'
import Card from './Card/Card'
import {adminusers} from '../js/action/actionUser'
import icons from 'glyphicons'


function Dashbord({produit}) {
 
  const userid = localStorage.getItem('Userid')
  const user = localStorage.getItem('user')
   const history = useHistory()
   const [search ,setsearch] = useState("")   
    
     const products = produit.filter(el =>{
       return el.name.toLowerCase().includes(search.toLowerCase())
     })
          
//delete function 
//const removeitem = async (productid) => {

  //  await api.delete(`/product/${productid}`,{headers:{user}})
    //window.location.reload(true)


  
//}


    return (
    <React.Fragment>
    

        {user ? <div>
          <div className="w3-panel w3-metro-blue">

          
          <Input placeholder='searching....' value={search} onChange={(e)=>setsearch(e.target.value)} style={{width:'500px',marginLeft:'500px',marginTop:"20px"}}/>

</div>
<div style={{
            display: 'flex',
            flex: 'column',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
                     
        
              
         { products.map((el)=>(
           
         <div>
           
          <Card  products={el}  userid={userid}/>

        
        
         </div>
         ))}

        </div>
        </div>: window.location = '/login'
        
    }

    </React.Fragment>
        
        
         
    )
}

export default Dashbord
