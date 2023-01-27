import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { Link } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import {sendOrder} from '../components/actions/orderActions'

class ShoppingCartContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
         total: 0
        }
      }

      handleSendOrder= ()=>{
        if (this.props.cart.length === 0){
            alert('Must have items in cart')
        }
        else {
             let o = this.props.currentOrder
             let t = Math.round((this.props.total * 1.1)*100)/100
             this.props.sendOrder(t, o);
            }
        }

    render() {
        const items = this.props.cart.map( item => <CartItem item={item} key={item.id}/>
        )
        return (
        <div>   
        <Segment>
        <Header as="h1" color='teal'><center>Your Cart ({items.length})</center></Header>
        <List>
        {items}
        </List>
        <center>    
        <Divider></Divider>
        <h3>Subtotal: ${this.props.total}</h3>
        <h3>Plus Tax</h3>
        <h3>Total: ${Math.round((this.props.total * 1.1)*100)/100}</h3>
        <Link to="/">
        <Button content="Submit Order"
        onClick={()=>{this.handleSendOrder()}}></Button>
        </Link>
        </center>
        </Segment>
        <Segment>
        <Checkout />
        </Segment>
        </div>
        )
    }}

    const MSTP = (state) => {
        return {
            cart: state.cart,
            total: state.cartTotal,
            currentOrder: state.currentOrder,
        }
    }

    const MDTP = (dispatch) => {
        return {
            sendOrder: (t, id) => { dispatch(sendOrder(t, id))}
        }
    }

export default connect(MSTP, MDTP)(ShoppingCartContainer)