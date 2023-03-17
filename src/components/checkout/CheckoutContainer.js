import React, { Component } from 'react'
import { connect } from "react-redux"
import { List, Button, Divider, Grid } from 'semantic-ui-react'
import CartItem from '../cart/CartItem'
import { sendOrder } from '../actions/orderActions'
import { checkUser } from '../actions/userActions'
import Totals from './Totals'
import EditUser from '../user/EditUser'
import { Link } from 'react-router-dom'

class CheckoutContainer extends Component {

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
                            <h2>shipping address</h2>
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