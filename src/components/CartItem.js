import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromCart} from './actions/cartActions'
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
                <Item.Image size='tiny' floated='middle' src={i.image_url} />
                <Item.Header>{i.title}: ${i.price}</Item.Header>
                <Item.Meta>{i.description}</Item.Meta>
                <Button content="Remove" size="tiny" color="teal" onClick={()=>{this.handleRemove(i.id)}}></Button>
            </Item.Content>
        </Item> 
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (id) => { dispatch(removeFromCart(id)) } }
}

export default connect(null, mapDispatchToProps)(CartItem)