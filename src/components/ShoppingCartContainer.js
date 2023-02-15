import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Divider, Item } from 'semantic-ui-react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import {sendOrder} from '../components/actions/orderActions'
import ShoppingLinks from './ShoppingLinks'
import Navbar from './Navbar'
import {checkUser} from './actions/userActions'

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
                window.alert("Order Submitted")
                this.props.checkUser()
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
      
                    <Segment style={{ width:"640px", position:"center"}}>
                        <Header as="h2"><center><i>Shopping Cart ({items.length})</i> </center></Header>
                        <Divider></Divider>
                        <List>
                            {items}
                        </List>
                        <Divider></Divider>
                        <h4>Subtotal: ${this.props.total}</h4>
                      
                        <Link to="/checkout"><Button size="big" content="CHECKOUT" >
                                </Button>
                            </Link>
                        

                    </Segment>
              
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
        sendOrder: () => { dispatch(sendOrder()) },
        checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer)