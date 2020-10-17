import React from 'react';
import  {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container } from 'reactstrap'


const Cardhome = ({el :{_id,name , discription , price ,img_url ,category,user}}) => {
  
  const todetails = () =>{

    window.location=`/details/:${_id}`
  }
  
  
  return (

<div class="w3-card-5" style={{marginLeft:'30px'}} onClick={todetails}>
<div class="w3-display-container w3-hover" style={{width:'50%'}}>
<img src={img_url} style={{width:'320px' ,margin:'10px'}}/>
<div class="w3-display-middle w3-display-hover w3-xlarge">
<div class="w3-container w3-flat-midnight-blue" style={{width:'200px',marginLeft:'100px',border:'1px blacl solid',borderRadius:'15px'}}>  
<p>{name}</p>
<p>price: {price}$</p>  
</div>
</div>
  
  </div>
  </div>


  )
}

export default Cardhome;