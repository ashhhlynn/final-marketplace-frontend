import React, { Component } from 'react'
import { connect } from "react-redux"
import { List, Button, Divider, Grid } from 'semantic-ui-react'
import CartItem from '../cart/CartItem'
import { sendOrder } from '../actions/orderActions'
import { checkUser } from '../actions/userActions'
import Totals from './Totals'
import EditUser from '../user/EditUser'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';

class CheckoutContainer extends Component {

    componentDidMount = () => {
        console.log(process.env.STRIPE_PUBLISHABLE_KEY)
    }

    handleSendOrder = (event, orderTotal) => {
        event.preventDefault()
        if (this.props.cart.length === 0) {
            window.alert('Must have items in cart')
        }
        else {
            let total = (orderTotal*1.1+10).toFixed(2)
            this.props.sendOrder(this.props.currentOrder, total)
        }
    }

    onToken = (token) => {
        const charge = {
            token: token.id,
        };
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ charge: charge, price: (this.props.total*1.1).toFixed(2) }),
            };
            fetch("https://final-marketplace-api.onrender.com/charges", config)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.status === "succeeded") {
                    console.log("Token retrieved successfully.");
                } 
                else {
                    console.log("Token retrieval failed.");
                }
            })
            .catch((error) => {
                console.error("Error while retrieving token:", error);
            });
        };

    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        let orderTotal = (this.props.total)
        return (
            <div className="checkoutContainer">
                <Grid columns={2} stackable divided>
                    <Grid.Column style={{ backgroundColor:"#ffffff"}} >
                        <List>
                            <h1>your order<Button floated="right" as={Link} to ="/products" circular content="Back to Shop"></Button></h1><br/>
                            {items}
                            <Totals total={this.props.total}/>
                            <div className="checkoutButtons">
                                <Button circular content="Place Order" onClick={(event) => {this.handleSendOrder(event, orderTotal)}}></Button> 
                            </div>
                        </List>
                    </Grid.Column>
                    <Grid.Column >
                        <div className="shipping">
                            <h2 style={{marginLeft:"31%"}}>shipping address                    
                                <StripeCheckout
                                floated="right"
                                color="black"
                                style={{backgroundColor: "black", floated:"right", marginLeft:"13%"}}
                                token={this.onToken}
                                stripeKey={process.env.STRIPE_API_KEY}
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
        sendOrder: (orderId, total) => { dispatch(sendOrder(orderId, total)) },
        checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)