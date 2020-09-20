import React,{useState , useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deltproduct, editproduct} from '../../js/action/action'
import {userdislay} from '../../js/action/actionUser'
import{Button} from 'reactstrap'
import './MovieCard.css'
import api from '../../service/api'
import{adminusers} from '../../js/action/actionUser'


function Card({products :{_id, name , discription , price ,img_url ,category,user},userid}) {
      const User  = localStorage.getItem('user')
      const r= localStorage.getItem('role')
      const dispatch = useDispatch()
      const [edition , setedition]=useState(false)
      const [text,settext]=useState('')
      const [prix , setprix]=useState(0)
      const [editprix , seteditprix] = useState(false)
      const username =  useSelector(state => state.Nameuserreducer)
      const removeItem = (_id) => {
        dispatch(deltproduct(_id))
        window.location.reload(true)
      }
      useEffect(()=>{
         dispatch(userdislay(_id,User))
      }, [])
            const editing = () =>{
              setedition(true)
            }
    // edit prix 
    const editprice = ()=>{
      seteditprix(true)
    } 
const confirmPrice = () =>{
  if(prix!=0){
 dispatch(editproduct(_id,name,prix))
  }
  seteditprix(!editprix)
  window.location='/dashbord'
}

//   edit name 
const confirming = () =>{
  if(text.trim() !==''){
   dispatch(editproduct(_id,text,price))
  }
     setedition(false)
     settext('')
     window.location="/dashbord"
     
}
    return (
      <>
      
    <div className='container'>
      <div className='movie'>
      
        <div className='movie-img'>
        {userid===user || r == 1 ? <Button onClick={()=>removeItem(_id)} color="danger">Delete</Button> : ""}
          <img alt='movie poster' src={img_url} />
        </div>
        <div className='text-movie-cont'>
          <div className='mr-grid'>
            <div className='col1'>
          {edition ?<> <input defaultValue={name} placeholder='typiing' onChange={(e)=>settext(e.target.value)}/><button onClick={confirming}>confirm</button></>
             :<div><h3 style={{textDecorationStyle:'solid'}}>{name}</h3> {userid === user || r==1? <Button color="danger" onClick={editing}>edit</Button>:""}</div>
            
              }
              <ul className='movie-gen'>
                 <p>{discription}</p>
              </ul>
            </div>
            <div className='col2'>
    <h3>userID: {user}</h3>
            </div>
          </div>
         
          <div className='mr-grid summary-row'>
     {
     editprix ? <> <input placeholder='new price' defaultValue={price} 
     onChange={(e)=>setprix(e.target.value)}
         />
      {<button onClick={confirmPrice}>EditPrix</button>} </> :
     <div>       
    <h2>Price: {price}$</h2>
    { userid === user  || r==1 ? <img src={'icons8-edit-property-40.png'} style={{width:"20px" , height:"20px" , marginTop:'-10px'}}  onClick={editprice}/>:""}
    <h3>{category}</h3>
    </div>
     }     
          </div>

        </div>

      </div>
      
        </div>
    
      </>
    )
}

export default Card