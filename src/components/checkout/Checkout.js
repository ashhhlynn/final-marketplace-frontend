import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Table, Divider, Item, Grid} from 'semantic-ui-react'
import CartItem from '../cart/CartItem'
import {sendOrder} from '../actions/orderActions'
import {checkUser} from '../actions/userActions'
import PaymentForm from './PaymentForm'
import EditUser from '../user/EditUser'
import { sellProduct } from '../actions/cartActions'


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
                    <Grid.Column centered textAlign='left' style={{width: "500px", marginLeft: "5%", marginTop:"2%"}}>
                        <Header as="h2"><i>Order Summary</i></Header>    
                        <Divider></Divider>
                        <List>
                            {items}
                        </List>
                        <Divider></Divider>

                        <Table compact basic='very' singleline style={{borderTop: "0px", marginTop:"2%", width:"450px"}}>
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
        <Table.Cell  style={{borderTop:"0", height:"10px"}}><b>Total</b></Table.Cell>
        <Table.Cell style={{border:"0"}} textAlign="right"><b>${Math.round((this.props.total * 1.1 + 10)*100)/100}</b></Table.Cell>
      </Table.Row>


      </Table.Body>
           </Table>

                    </Grid.Column>
                    <Grid.Column floated="right" style= {{marginRight: "0%"}}>
                        <Segment style= {{width: "550px", marinRight:"4%", marginTop: "2.5%"}}>
                            
                           <h4> <center>Shipping Information</center></h4>
                            <EditUser />
                            <h4><center> Payment Information</center></h4>
                            <PaymentForm /><br></br>
                            <center><Button size="large" style= {{width: "300px", backgroundColor:"#26453e", color:"#FFFFF0"}} content="PLACE ORDER" 
                            onClick={(event) => {this.handleSendOrder(event, orderTotal)}}>
                            </Button></center>                             
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
        checkUser: () =>  { dispatch(checkUser()) },
        sellProduct: (product, user) => { dispatch(sellProduct(product, user)) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)