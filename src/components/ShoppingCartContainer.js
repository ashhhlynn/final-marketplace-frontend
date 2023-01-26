import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header } from 'semantic-ui-react'
import CartItem from './CartItem'


class ShoppingCartContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
         total: 0
        }
      }

    render() {
        const items = this.props.cart.map( item => <CartItem item={item} key={item.id}/>)
        return (
        <div>
   <Header as="h1" color='teal'><center>Your Cart ({items.length})</center></Header>
            <List>
        {items}
        </List>
        </div>
        )
    }}

    const MSTP = (state) => {
        return {
            cart: state.cart,
            total: state.cartTotal
        }
    }

export default connect(MSTP)(ShoppingCartContainer)