import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Container ,Spinner} from 'reactstrap';
import api from '../service/api'

function Products() {
    // product state useState('')
    const cate =['gaming','smartphones','laptop']
    const localregion =['Ariana','Béja','Ben Arous','Bizerte','Gabès','Gafsa','Jendouba','Kairouan','Kasserine','Kebili','Kef','Mahdia','	Manouba','Medenine','Monastir','Nabeul','Sfax','Tunis']
    const [img , setImg]=useState(null)
    const[name,setName]=useState('')
    const [discription , setDiscription]=useState('')
    const [category , setCategoty] = useState('cat')
    const[price , setPrice] = useState(null)
    const [date , setDate] =useState('')
    const [tel , settel]=useState(null)
    const [region , setrigion]=useState('')
    const [id ,setid] = useState(null)
    //user matter
    const [usersession , setusersession]=useState(null)
    const [username , setUsername] = useState(null)
     const history = useHistory()
   // const user_id = localStorage.getItem('userid')
    const user  = localStorage.getItem('user')
     const userid = localStorage.getItem('userid')
      console.log(user)

      
 
    
//handle submit 
const handlesubmit = async ev =>{
    ev.preventDefault()
    
     console.log(localStorage.getItem('userid')
     )

     const productData = new FormData()
     productData.append('img',img)
     productData.append('name',name)
     productData.append('discription',discription)
     productData.append('price',price)
     productData.append('category',category)
     productData.append("date",date)
     productData.append('region',region)
     productData.append('tel',tel)
     if(name!=="" && 
        discription !=="" &&
        category !==""
        && date !=="" &&
        img !== null   && region !=='')
        {
          return alert('try again')
        }
        {
         await api.post('/product',productData,{ headers :{ user }})   
        }
        setName('')
        setImg(null)
        setPrice(0)
        setDiscription('')
        setCategoty('')
        setDate('')
        settel('')
     history.push('/Dashbord')   
}
// fetching data from data
useEffect(()=>{

  api.get(`/user/${userid}`,{headers:{user : user}})
  .then(data =>{setUsername(data.data.authData.user.firstname)
              setusersession(data.status)
              setid(data.data.authData.user._id)
              
            console.log(data)})
        
              
},[])
localStorage.setItem('iduser',id)

//display user
console.log(id)

useEffect(()=>{
if(usersession===403){
  history.push('/login')
}
},[usersession])

// session control
  
   

      
 // 
console.log(category)

    return (
      <div className='productcontainer'>
        
{ user ?
  

        (<Form>
            <h1 style={{color:'red'}}>adding product</h1>
             <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label  className="mr-sm-2">product image</Label>
          <Input type="file"  onChange={(e)=>setImg(e.target.files[0])}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label  className="mr-sm-2">product name</Label>
          <Input type="text"   placeholder="prodcut name"  value={name} onChange={(e)=>setName(e.target.value)}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">discription</Label>
          <Input type="text"   placeholder="discription"  value={discription} onChange={(e)=>setDiscription(e.target.value)}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">price</Label>
          <Input type="number"   placeholder="price"  value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">category</Label>
          <select class="form-control" id="exampleFormControlSelect1"  onChange={(e =>setCategoty(e.target.value))}>
          <option selected>Select Category</option>
       {cate.map(el =>(
        <option value={el}>{el}</option> 
       ))
      
}
    </select>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">  
          <Label  className="mr-sm-2">Date</Label>
          <Input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">phone</Label>
          <Input type="phone"   placeholder="phone"  value={tel} onChange={(e)=>settel(e.target.value)}/>
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">region</Label>
          <select class="form-control" id="exampleFormControlSelect1"  onChange={(e =>setrigion(e.target.value))}>
          <option selected>Select Region</option>
       {localregion.map(el =>(
        <option value={el}>{el}</option> 
       ))
      
}
    </select>
        </FormGroup>
        
        
        <Button onClick={handlesubmit} color='danger' style={{marginTop:'10px'}}>Save</Button>
      </Form>):
      history.push('/login')
}
      </div>
    )
    
}

export default Products
