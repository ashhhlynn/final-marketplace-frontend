import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import { Item, Button, Header, Divider, Icon, List, Image } from 'semantic-ui-react'

class CartItem extends Component {

    handleRemove = (id) => {
        this.props.removeFromCart(id);
        alert("Removed from Cart")
    }

    render() {
        const i = this.props.item
        return (        
            <>
            <Item>
                <Button size="tiny" style={{ marginTop:"-2%"}}inverted floated="right" onClick={()=>{this.handleRemove(i.id)}}>
                    <Button.Content visible><Icon color="grey" name="close"></Icon></Button.Content>
                </Button>
                <Image size='tiny' src={i.image_url} /> 
                <Item.Content style={{ marginLeft:"2%"}}>
                <h3 >{i.title}</h3>
                   ${i.price.toFixed(2)}
                </Item.Content>
            </Item> 
            <Divider></Divider>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (id) => { dispatch(removeFromCart(id)) } }
}

export default connect(null, mapDispatchToProps)(CartItem)