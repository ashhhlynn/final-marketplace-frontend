import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Table, Divider, Item, Grid} from 'semantic-ui-react'
import CartItem from '../cart/CartItem'
import {sendOrder} from '../actions/orderActions'
import {checkUser} from '../actions/userActions'
import PaymentForm from './PaymentForm'
import EditUser from '../user/EditUser'
import { sellProduct } from '../actions/cartActions'

import { useNavigate } from "react-router-dom";

class Checkout extends Component {

  

    handleSendOrder = (event, orderTotal) => {
        event.preventDefault()
        this.handleCheck()
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
                window.alert("Your order was successfully submitted!")
                this.props.checkUser()
               
            })
        }
    }

    handleCheck = () => {
        this.props.cart.map((product) => {
    this.props.sellProduct(product, this.props.user)})
    }
  
       
    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        let orderTotal = Math.round((this.props.total * 1.1 + 10)*100)/100
        return (
            <div> 
                <Grid columns={2}  >
                    <Grid.Column centered textAlign='left' style={{width: "440px", marginLeft: "5%", marginTop:"2%"}}>
                    <h2 style={{fontWeight:"normal"}}>order summary</h2>   
                        <Divider></Divider>
                        <List>
                            {items}
                        </List>
                        <Divider></Divider>

                        <Table compact basic='very' singleline style={{fontSize:"16px", borderTop: "0px", marginTop:"-2%", width:"390px"}}>
               <Table.Body>
           <Table.Row style={{borderTop:"0px", height:"10px"}} >
        <Table.Cell  style={{borderTop:"0", height:"10px"}}>Subtotal</Table.Cell>
        <Table.Cell style={{border:"0"}} textAlign="right">${this.props.total}</Table.Cell>
      </Table.Row>
      <Table.Row style={{borderTop:"0px", height:"10px"}} >
        <Table.Cell  style={{borderTop:"0", height:"10px"}}>Tax</Table.Cell>
        <Table.Cell style={{border:"0"}} textAlign="right">${Math.round((this.props.total * .1)*100)/100}</Table.Cell>
      </Table.Row>
      <Table.Row style={{borderTop:"0px", height:"10px"}} >
        <Table.Cell  style={{borderTop:"0", height:"10px"}}>Shipping</Table.Cell>
        <Table.Cell style={{border:"0"}} textAlign="right">$10</Table.Cell>
      </Table.Row>
      <Table.Row style={{borderTop:"0px", height:"10px"}} >
        <Table.Cell  style={{ height:"10px"}}><b>Total</b></Table.Cell>
        <Table.Cell  textAlign="right"><b>${Math.round((this.props.total * 1.1 + 10)*100)/100}</b></Table.Cell>
      </Table.Row>
      </Table.Body>
           </Table>
           <Button size="medium" style= {{width: "400px", backgroundColor:"#26453e", color:"#FFFFF0"}} content="Place Order" 
                            onClick={(event) => {this.handleSendOrder(event, orderTotal)}}>
                            </Button>

                    </Grid.Column>
                    <Grid.Column floated="right" style= {{width:"640px", backgroundColor: "#FFFFFF", marginTop: "1.1%", marginRight: "0%"}}>
                     
                            
                           <h3 style={{marginTop:"3%", fontWeight:"normal"}}> <center>shipping address</center></h3>
                           
                           <Item style={{width:"560px"}}>
                            <EditUser /></Item>
                            <h3 style={{marginTop:"4%", fontWeight:"normal"}}><center>payment info</center></h3>
                            <Item style={{width:"560px"}}>
                            <PaymentForm /><br></br>
                            </Item>           
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
        sellProduct: (product, user) => { dispatch(sellProduct(product, user)) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)