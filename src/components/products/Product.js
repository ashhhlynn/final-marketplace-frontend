import React, {Component} from 'react'
import { Card, Image, Button, Divider, Reveal} from 'semantic-ui-react'
import { connect } from "react-redux"
import { addToCart } from '../actions/cartActions'
import { sellProduct } from '../actions/cartActions'

class Product extends Component {

    render() {
        const i = this.props.product
        return (
            <Card key={i.id} style={{ width:"330px", background:"#fdfcf9"}}>
               <Card.Content>
                <Reveal animated='move'>
                <Reveal.Content visible>  
                <Card.Content>
                    <Image position="center" src={i.image_url}/>
                    <Card.Header as="h3" style={{marginTop:"2%", fontWeight:"normal"}}>{i.title}</Card.Header>  
                    <Card.Header as="h4" style={{marginTop:"-11%", fontWeight:"normal", marginLeft:"86%"}}>${i.price} </Card.Header>
                    <Card.Meta style={{marginTop:"-4%"}}><i>by user {i.user_id}</i></Card.Meta> 
                </Card.Content>
                </Reveal.Content>
                <Reveal.Content hidden>
                <Card.Content>
                    <Card.Description>{i.description}</Card.Description><br></br>
                    <center>
                    <Button color="grey" floated="bottom" onClick={(event) => {this.handleClick(event, i)}}>  
                    Add to Cart
                    </Button> 
                    </center>    
                </Card.Content>
                </Reveal.Content>
                </Reveal>
                </Card.Content>
            </Card>
        )      
    }

    handleClick = (event, product) => {
        event.preventDefault()
        if (this.props.cart.find((p) => p.id == product.id)){
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
        user: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, order) => { dispatch(addToCart(product, order)) },
        sellProduct: (product, user) => { dispatch(sellProduct(product, user)) }
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Product)