import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import { Item, Button, Icon } from 'semantic-ui-react'

class CartItem extends Component {

    handleRemove = (id) => {
        this.props.removeFromCart(id);
        alert("Removed from Cart")
    }

    render() {
        const i = this.props.item
        return (        
            <Item>
                <Button size="small" style={{marginTop:"-2%"}} inverted floated="right" onClick={()=>{this.handleRemove(i.id)}}>
                    <Button.Content visible><Icon color="grey" name="close"></Icon></Button.Content>
                </Button> 
                <Item.Content> 
                    <Item.Image floated="left" size='tiny' src={i.image_url} /> 
                    {i.title}
                    <Item style={{textAlign: "left"}}> <b>${i.price}.00</b></Item>
                </Item.Content>
            </Item> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (id) => { dispatch(removeFromCart(id)) } }
}

export default connect(null, mapDispatchToProps)(CartItem)