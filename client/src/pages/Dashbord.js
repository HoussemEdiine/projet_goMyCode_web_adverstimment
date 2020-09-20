import React , {useState,useEffect,}  from 'react'
import {useHistory} from 'react-router-dom'
import  {Button, Input} from 'reactstrap'
import {useDispatch,useSelector} from 'react-redux'
import api from '../service/api'
import Card from './Card/Card'
import {adminusers} from '../js/action/actionUser'


function Dashbord() {
  const userid = localStorage.getItem('Userid')
  const user = localStorage.getItem('user')
    //states
   const [product,setproduct]=useState([])
   const [status , setstatus]=useState(0)
   const [search ,setsearch] = useState("")
   
   const history = useHistory()
       
     useEffect(() => {
        console.log('this is '+user)
        if(user!==null){
         api.get('/products',{headers:{user}})
         .then(data=>{setproduct(data.data.product)
            setstatus(data.request.status)}   )
         }
     }, [])
     const products = product.filter(el =>{
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
            <h1 style={{alignItems:'center'}}>All Products</h1>
<div style={{
            display: 'flex',
            flex: 'column',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
                     
        <Input placeholder='searching....' value={search} onChange={(e)=>setsearch(e.target.value)} 
              
              /> 
              
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
