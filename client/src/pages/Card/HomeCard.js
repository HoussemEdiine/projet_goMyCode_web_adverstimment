import React from 'react';
import  {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container } from 'reactstrap'
const Cardhome = ({el :{name , discription , price ,img_url ,category,user}}) => {
  return (

    <div className="container" >


    <Card>
      <CardImg top width="100%" src={img_url} alt="Card image cap" />
      <CardBody>
  <CardTitle>{name}</CardTitle>
  <CardSubtitle>{price} $</CardSubtitle>
  <CardText>{discription} </CardText>
  <CardText>{user} </CardText>
      </CardBody>
    </Card>
     </div>

  )
}

export default Cardhome;