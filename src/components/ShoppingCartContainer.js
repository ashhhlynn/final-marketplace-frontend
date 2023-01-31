import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import {sendOrder} from '../components/actions/orderActions'
import ShoppingLinks from './ShoppingLinks'
import Navbar from './Navbar'

class ShoppingCartContainer extends Component {

    handleSendOrder = (event, orderTotal) => {
        event.preventDefault()
        if (this.props.cart.length === 0) {
            window.alert('Must have items in cart')
        }
        else {
            const token = localStorage.token;
            let orderId = this.props.currentOrder
            fetch(`http://localhost:3000/orders/${orderId}`, {    
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                     Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    total: orderTotal,
                    complete: 1
                })})
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.props.sendOrder()
            })
        }
    }
       
    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        let orderTotal = Math.round((this.props.total * 1.1)*100)/100
        return (
            <div>   
                <Navbar/>        
                <ShoppingLinks/>        
                <Segment.Group horizontal>
                    <Segment>
                        <Header as="h2"><center><i>Your Cart ({items.length}) </i></center></Header>
                        <Divider></Divider>
                        <List>
                            {items}
                        </List>
                    </Segment>
                    <Segment>
                        <Header as="h2">
                            <center>
                                <i>Your Order</i>
                                <Divider></Divider>
                            </center>
                        </Header>
                        <center>
                            <h3>Subtotal: ${this.props.total}</h3>
                            <h3>Tax: ${Math.round((this.props.total * .1)*100)/100}</h3>
                            <h3>Total: ${orderTotal}</h3>              
                            <h3>User Information:</h3>
                                <AccountInfo user={this.props.user} key={this.props.user.id}/>
                        </center>
                        <center><br></br>
                            <Link to="/">
                                <Button content="Submit" color='teal' onClick={(event) => 
                                {this.handleSendOrder(event, orderTotal)}}>
                                </Button>
                            </Link>
                        </center>
                    </Segment>
                </Segment.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.cartTotal,
        currentOrder: state.currentOrder,
        user: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendOrder: () => { dispatch(sendOrder()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer)