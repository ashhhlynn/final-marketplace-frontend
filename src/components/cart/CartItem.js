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
               
                <Item.Content> 
                <Button size="small" style={{marginTop:"-2.5%"}} inverted floated="right" onClick={()=>{this.handleRemove(i.id)}}>
                    <Button.Content visible><Icon color="grey" name="close"></Icon></Button.Content>
                </Button> 
                    <Item.Image floated="left" size='tiny' src={i.image_url} /> 
                    <h4 style={{fontWeight:"normal"}}>{i.title}</h4>
                    <Item style={{textAlign: "left"}}> ${i.price}</Item>
                </Item.Content>
            </Item> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (id) => { dispatch(removeFromCart(id)) } }
}

export default connect(null, mapDispatchToProps)(CartItem)