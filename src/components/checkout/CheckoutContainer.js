import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { List, Button, Divider, Grid } from 'semantic-ui-react';
import CartItem from '../cart/CartItem';
import Totals from './Totals';
import EditUser from '../user/EditUser';
import StripeCheckout from 'react-stripe-checkout';
import { sendOrder } from '../actions/orderActions';
import { checkUser } from '../actions/userActions';

class CheckoutContainer extends Component {

    handleSendOrder = (event, orderTotal) => {
        event.preventDefault()
        if (this.props.cart.length === 0) {window.alert('Must have items in cart')}
        else {this.props.sendOrder(this.props.currentOrder, orderTotal)}
    };

    onToken = (token) => {
        fetch("https://final-marketplace-api.onrender.com/charges", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ charge: { token: token.id,}, price: (this.props.total*1.1+10).toFixed(2) 
            })
        })
        .then(res => res.json())
    };

    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        let orderTotal = (this.props.total*1.1+10).toFixed(2) 
        return (
            <div className="checkoutContainer">
                <Grid columns={2} stackable divided>
                    <Grid.Column >
                        <List>
                            <h1>your order<Button floated="right" as={Link} to ="/products" circular content="Back to Shop"></Button></h1><br/>
                            {items}
                            <Totals total={this.props.total}/>
                            <div className="checkoutButtons">
                                <Button circular content="Place Order" onClick={(event) => {this.handleSendOrder(event, orderTotal)}}></Button> 
                            </div>
                            <br></br>
                        </List>
                    </Grid.Column>
                    <Grid.Column >
                        <div className="shipping">
                            <h2 style={{marginLeft:"31%"}}>shipping address                    
                                <StripeCheckout
                                floated="right"
                                backgroundColor="black"
                                style={{floated:"right", marginLeft:"13%"}}
                                token={this.onToken}
                                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                                className="checkout"
                                />
                            </h2>
                            <Divider></Divider><br/>
                            <EditUser />
                        </div>    
                    </Grid.Column>
                </Grid>
            </div>
        )
    };   
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.cartTotal,
        currentOrder: state.currentOrder,
        user: state.currentUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendOrder: (orderId, total) => { dispatch(sendOrder(orderId, total)) },
        checkUser: () =>  { dispatch(checkUser()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);