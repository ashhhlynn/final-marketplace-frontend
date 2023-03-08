import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Segment, Button, Divider, Item, Grid} from 'semantic-ui-react'
import CartItem from '../cart/CartItem'
import {sendOrder} from '../actions/orderActions'
import {checkUser} from '../actions/userActions'
import CheckOut from './CheckOut'
import Totals from './Totals'
import EditUser from '../user/EditUser'

class CheckoutContainer extends Component {

    handleSendOrder = (event, orderTotal) => {
        event.preventDefault()
        if (this.props.cart.length === 0) {
            window.alert('Must have items in cart')
        }
        else {
            const token = localStorage.token;
            let orderId = this.props.currentOrder
            let cart = this.props.cart
            let user = this.props.user
            let t = orderTotal

            fetch(`http://localhost:3000/orders/${orderId}`, {    
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                     Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    total: t,
                    complete: 1
                })})
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.props.sendOrder()
                window.alert("Your order was successfully submitted!")
                this.props.checkUser()
               
            })

            for (let i = 0;
                i < (cart.length + 1); i++) {

            fetch(`http://localhost:3000/products/${cart[i].id}`, {  
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                     Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                   sold: 1,
                   buyer: user.id,
                })})
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                window.alert("Your product was successfully patched")
            })
        }
        }
    }
       
    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        let orderTotal = this.props.total.toFixed(2)
        return (
            <div> 
                <Grid columns={2}  >
                    <Grid.Column centered textAlign='left' style={{width: "520px", marginLeft: "5%", marginTop:"2%"}}>
                    <div className="checkoutContainer"><h3 style={{fontSize:"20px"}}>order summary</h3>  </div> 
                        <Divider></Divider>
                        <List style={{width:"410px"}}>
                            {items}
                        </List>
                        <Totals total={this.props.total}/>
                        <Button size="medium" style= {{marginTop:"2%", marginBottom:"2%", width: "400px", backgroundColor:"#26453e", color:"#FFFFF0"}} content="Place Order" 
                            onClick={(event) => {this.handleSendOrder(event, orderTotal)}}>
                        </Button>  
                    </Grid.Column>
                    <Segment floated="right" style= {{width:"680px", backgroundColor: "#F0F0f0", marginTop: "1.1%", marginRight: "0%"}}>
                    <Grid.Column >
                        <div className="shipping">
                        <Item centered style={{marginLeft:"7.25%", width:"560px"}}>
                           <h2 style={{}}>shipping information</h2>
                           <Divider></Divider>
                            <EditUser />
                        </Item> </div>    
                    </Grid.Column>
                    </Segment>  
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
        checkUser: () =>  { dispatch(checkUser()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)