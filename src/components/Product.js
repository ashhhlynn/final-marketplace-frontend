import React, {Component} from 'react';
import { Card, Image } from 'semantic-ui-react'



class Product extends Component {

render(){
    const i = this.props.product
    return (
                <Card centered key={i.id}>
                     <Image 
                    src={i.image_url}/>
                    <Card.Header>{i.title}: ${i.price}</Card.Header>
                <Card.Description>{i.description}</Card.Description>
                <button className="addCartBtn"
            onClick={()=>{this.handleAddCart(i.id, i.title, i.price)}}>Add to Cart</button> 
            </Card>
    )
    }

    handleAddCart(id, title, price){


    }    
}

export default Product