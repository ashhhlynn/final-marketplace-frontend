import React, {Component} from 'react'
import { Card, Image, Button, Icon} from 'semantic-ui-react'
import { connect } from "react-redux"
import { addToCart } from '../actions/cartActions'
import { sellProduct } from '../actions/cartActions'

class Product extends Component {

    render() {
        const i = this.props.product
        return (
            <Card key={i.id} style={{ width:"330px", background:"#fdfcf9"}}>
                <Card.Content>
                    <Image size="medium" position="center" src={i.image_url}/>
                    <Button floated="right" inverted style={{background:"#fdfcf9", color: "grey", marginRight:"-6.5%", marginTop: ".7%"}} circular size="small" onClick={(event) => {this.handleClick(event, i)}}>  
                    <Icon name="add" floated="center"></Icon>
                    </Button>  
                    <Card.Header style={{marginTop: ".4%", fontWeight:"normal"}}>{i.title} 
                    </Card.Header>
                    <b>${i.price}</b> posted {i.created_at.slice(6, -14)}-2023 by user {i.user_id}
                    <Card.Description>
                        <i>{i.description}</i>
                    </Card.Description> 
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
   sellProduct: (product, user) => { dispatch(sellProduct(product, user)) }}
    
    
    }

 
export default connect(mapStateToProps, mapDispatchToProps)(Product)