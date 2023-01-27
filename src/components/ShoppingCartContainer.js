import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import {sendOrder} from '../components/actions/orderActions'
import ShoppingLinks from './ShoppingLinks'

class ShoppingCartContainer extends Component {

handleSendOrder = (event, orderTotal) => {
    event.preventDefault()
    if (this.props.cart.length === 0){
        alert('Must have items in cart')
    }
    else {
        let orderId = this.props.currentOrder
        fetch('http://localhost:3000/orders/' + `${orderId}`, {
            method: 'PATCH',
            headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': localStorage.token
            },
            body: JSON.stringify({
                total: orderTotal,
                complete: 1}),
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
            })
        this.props.sendOrder()
    }
}
       
    render() {
        const items = this.props.cart.map( 
            item => <CartItem item={item} key={item.id}/>
            )
        let orderTotal = Math.round((this.props.total * 1.1)*100)/100
        return (
        <div>           
        <ShoppingLinks/>
                
        <Segment.Group horizontal>
        <Segment>
        <Header as="h2" color='teal'><center>Your Cart ({items.length})</center></Header>
        <List>
        {items}
        </List>
        </Segment>

        <Segment>
        <Header as="h2" color='teal'>
        <center>
        Your Order
        </center>
        </Header>
        <center>
        <h3>Subtotal: ${this.props.total}</h3>
        <h3>Tax: ${Math.round((this.props.total * .1)*100)/100}</h3>
        <h3>Total: ${orderTotal}</h3>              
         <h3>User Information:</h3>
        <AccountInfo user={this.props.currentUser} key={this.props.currentUser.id}/>
        </center>
        <center>
        <Link to="/">
        <Button content="Submit Order" onClick={(event)=>{this.handleSendOrder(event, orderTotal)}}></Button>
        </Link>
        </center>
        </Segment>
        </Segment.Group>
        </div>
        )
    }}

    const MSTP = (state) => {
        return {
            cart: state.cart,
            total: state.cartTotal,
            currentOrder: state.currentOrder,
            currentUser: state.currentUser
        }
    }

    const MDTP = (dispatch) => {
        return {
            sendOrder: (total, orderId) => { dispatch(sendOrder(total, orderId))}
        }
    }

export default connect(MSTP, MDTP)(ShoppingCartContainer)