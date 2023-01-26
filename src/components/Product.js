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
            onClick={()=>{this.handleClick(i, i.id, i.price)}}></Button> 
            </Card>
    )
    }

    handleClick(product, id, price){
        let o = this.props.currentOrder
        this.props.addToCart(product, id, price, o)
    }    
}
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (product, id, price, o) =>  { dispatch(addToCart(product, id, price, o)) }
  }}
  
  const mapStateToProps = (state) => {return {
    currentOrder: state.currentOrder
}
}

  export default connect(mapStateToProps, mapDispatchToProps)(Product)