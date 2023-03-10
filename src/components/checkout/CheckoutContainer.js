import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Segment, Button, Divider, Item, Container, Grid} from 'semantic-ui-react'
import CartItem from '../cart/CartItem'
import {sendOrder} from '../actions/orderActions'
import {checkUser} from '../actions/userActions'
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
                <Grid style={{ marginTop:"0%", marginBottom:"2%"}} columns={2} stackable divided >
                    <Grid.Column style={{ backgroundColor:"#ffffff"}} >
                        <List style={{ marginTop: "2%", marginLeft:"15%", width:"410px"}}>
                            <h2>order summary</h2><br></br>
                            {items}
                            <Totals total={this.props.total}/>
                            <Button size="medium" inverted style= {{marginTop:"2%", marginBottom:"2%", width: "200px", backgroundColor:"#26453e", color:"#FFFFF0"}} circular content="Place Order" 
                            onClick={(event) => {this.handleSendOrder(event, orderTotal)}}>
                            </Button> 
                            <Link to='/products'>
                            <Button size="medium" style= {{marginTop:"2%", marginBottom:"2%", width: "200px", backgroundColor:"#26453e", color:"#FFFFF0"}} inverted circular content="Back to  Shop">
                            </Button> </Link>
                            </List>
                    </Grid.Column>
                    <Grid.Column >
                        <div className="shipping">
                           <h1>shipping information</h1>
                           <Divider></Divider><br></br>
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
        sendOrder: () => { dispatch(sendOrder()) },
        checkUser: () =>  { dispatch(checkUser()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)