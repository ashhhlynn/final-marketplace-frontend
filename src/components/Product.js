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
            onClick={()=>{this.handleClick(i)}}></Button> 
            </Card>
    )
    }

    handleClick(product){
        this.props.addToCart(product, this.props.currentOrder)
        alert("Added To Cart")
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (product, order) =>  { dispatch(addToCart(product, order)) }
  }
}
  
  const mapStateToProps = (state) => {
    return {
    currentOrder: state.currentOrder
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)