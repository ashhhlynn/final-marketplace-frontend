import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import { Item, Button } from 'semantic-ui-react'

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
                    <Item.Image floated="right" size='tiny' src={i.image_url} />
                    <Item.Header>{i.title}: ${i.price}</Item.Header>
                    <Button floated="left" size="tiny" onClick={()=>{this.handleRemove(i.id)}}>
                    <Button.Content visible>-
                    </Button.Content>
                    </Button>
                    <Item.Meta>{i.description}</Item.Meta>
                   
                </Item.Content>
            </Item> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (id) => { dispatch(removeFromCart(id)) } }
}

export default connect(null, mapDispatchToProps)(CartItem)