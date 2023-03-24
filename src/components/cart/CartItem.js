import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import { Item, Button, Divider, Icon,  Image } from 'semantic-ui-react'

class CartItem extends Component {

    handleRemove = (pid) => {
        let cartItem = this.props.orderCart.find(oi => parseInt(oi.product_id) === pid)
        this.props.removeFromCart(pid, cartItem.id)
        alert("Item removed from basket.")
    }

    render() {
        const i = this.props.item
        return (        
            <>
            <Item>
                <Button size="tiny" style={{ marginTop:"-2%"}}inverted floated="right" onClick={()=>{this.handleRemove(i.id)}}>
                    <Icon color="grey" name="close"></Icon>
                </Button>
                <Image size='tiny' src={i.image_url} /> 
                <Item.Content style={{ marginLeft:"2%"}}>
                    <h3>{i.title}</h3>
                    ${i.price.toFixed(2)}
                </Item.Content>
            </Item> 
            <Divider></Divider>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orderCart: state.orderCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        removeFromCart: (pid, id) => { dispatch(removeFromCart(pid, id)) } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)