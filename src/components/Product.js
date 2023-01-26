import React, {Component} from 'react';
import { Card, Image, Button} from 'semantic-ui-react'
import { connect } from "react-redux";
import { addToCart } from './actions/cartActions'

class Product extends Component {

render(){
    const i = this.props.product
    return (
                <Card centered key={i.id}>
                     <Image 
                    src={i.image_url}/>
                    <Card.Header>{i.title}: ${i.price}</Card.Header>
                <Card.Description>{i.description}</Card.Description>
                <Button content="Add To Cart"
            onClick={()=>{this.handleClick(i, i.id, i.title, i.price)}}></Button> 
            </Card>
    )
    }

    handleClick(i, id, title, price){
        this.props.addToCart(i, id, title, price)
    }    
}
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id, title, price) =>  { dispatch(addToCart(i, id, title, price)) }
  }}
  
  
  export default connect(null, mapDispatchToProps)(Product)