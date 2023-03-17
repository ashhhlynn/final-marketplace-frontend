import React, { Component } from 'react'
import { Card, Image, Button, Header, Reveal, Icon } from 'semantic-ui-react'
import { connect } from "react-redux"
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom'

class Product extends Component {

    render() {
        const i = this.props.product
        return (    
            <Card key={i.id}>
                <Card.Content>
                    <div className="productCard"> 
                        <Reveal animated='move'>  
                            <Reveal.Content visible>
                                <Image position="center" src={i.image_url}/> 
                            </Reveal.Content>
                            <Reveal.Content style={{textAlign: "center", backgroundColor:"#F0f0f0", height:"200px"}} hidden>
                                <div className="productCardTwo">  
                                    <h5><i> {i.description}</i></h5>
                                </div>
                            </Reveal.Content>   
                        </Reveal>
                        <Header floated="right" >
                            <h4>
                                ${i.price.toFixed(2)} <Link><Icon onClick={(event) => {this.handleClick(event, i)}} color="grey" name="plus"></Icon></Link>
                            </h4>
                        </Header>
                        <Card.Header as="h3">{i.title}</Card.Header>
                        <Card.Meta style={{marginTop:"-3%"}}><i>by user {i.user_id}</i></Card.Meta>      
                    </div>
                </Card.Content>
            </Card>  
        )      
    }

    handleClick = (event, product) => {
        event.preventDefault()
        if (this.props.cart.find((p) => p.id === product.id)) {
            alert("You have already added this item.")
        }
        else {
            this.props.addToCart(product, this.props.currentOrder)
        }
    }    

}
  
const mapStateToProps = (state) => {
    return { 
        currentOrder: state.currentOrder,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, order) => { dispatch(addToCart(product, order)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)