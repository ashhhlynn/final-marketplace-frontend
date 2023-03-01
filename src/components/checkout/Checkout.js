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
                <Grid columns={2}  >
                    <Grid.Column centered textAlign='left' style={{marginLeft: "5%", marginTop:"2%"}}>
                        <Header as="h2"><center><i>Order Summary</i></center></Header>    
                        <Divider></Divider>
                        <List>
                            {items}
                        </List>
                        <Divider></Divider>
                        <p>Subtotal: ${this.props.total}</p>
                        <p>Tax: ${Math.round((this.props.total * .1)*100)/100}</p>
                        <p><b>Total: ${Math.round((this.props.total * 1.1)*100)/100}</b></p>
                    </Grid.Column>
                    <Grid.Column floated="right" style= {{width : "370px", marginRight: "10%"}}>
                        <Segment style= {{width : "410px", marginTop: "2.5%"}}>
                            <center>
                            <AccountInfo user={this.props.user} key={this.props.user.id}/><br></br>
                            <PaymentForm /><br></br>
                            <Button size="large" style= {{width : "380px"}} content="PLACE ORDER" 
                            onClick={(event) => {this.handleSendOrder(event, orderTotal)}}>
                            </Button>                             
                            </center>
                        </Segment>   
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
        sendOrder: () => { dispatch(sendOrder()) },
        checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)