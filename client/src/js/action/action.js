import api from '../../service/api'
export const GET_PRODUCT = 'GET_PRODUCT'
export const DELT_PRODUCT ='DELT_PRODUCT'
export const EDIT_PRODUCT  = 'EDIT_PRODUCT'
export const HOME_PRODUCT = 'HOME_PRODUCT'


export const gethomeproduct = () => (dispatch) => {
    api.get('/home')
    .then(res =>(dispatch({type : HOME_PRODUCT , payload : res.data})))


} 

const user = localStorage.getItem('user')
export const getproduct = () =>(dispatch) =>{
    api.get('/products',{headers:{user}})
       .then(data=>(dispatch({type: GET_PRODUCT , payload : data.data.product})))
       .catch(err =>err.response.data)
}
export const deltproduct = (id) => (dispatch) =>{
      
    api.delete(`/product/${id}`,{headers:{user}})
    .then(()=>dispatch(getproduct()))
  
}

export const editproduct = (id,name,price) =>(dispatch) =>{
    api.patch(`/update/${id}`,{name,price})
    .then(()=>dispatch(getproduct()))
}