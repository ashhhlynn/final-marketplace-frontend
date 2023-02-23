import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Divider, Grid} from 'semantic-ui-react'
import CartItem from '../cart/CartItem'
import AccountInfo from '../user/AccountInfo'
import {sendOrder} from '../actions/orderActions'
import {checkUser} from '../actions/userActions'
import PaymentForm from './PaymentForm'

class Checkout extends Component {

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
                <Segment>
                    <Grid columns={2}   textAlign='left'>
                    <Grid.Column>
                        <Header as="h2"><center><i>Order Summary</i></center> </Header>    
                        <Divider></Divider>
                        <List>
                            {items}
                        </List>
                        <Divider></Divider>
                        <p>Subtotal: ${this.props.total}</p>
                        <p>Tax: ${Math.round((this.props.total * .1)*100)/100}</p>
                        <p><b>Total: ${Math.round((this.props.total * 1.1)*100)/100}</b></p>
                        </Grid.Column>
                        <Grid.Column>
                            <center><h2><i>User Information</i></h2></center>
                            <Divider></Divider>
                                <center>
                                <AccountInfo user={this.props.user} key={this.props.user.id}/><br></br>
                                <p>Payment:</p>
                                <PaymentForm /><br></br>
                                <Button content="SUBMIT ORDER" size="big" onClick={(event) => 
                                {this.handleSendOrder(event, orderTotal)}}>
                                </Button>                             
                                </center>
                        </Grid.Column>
                    </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)