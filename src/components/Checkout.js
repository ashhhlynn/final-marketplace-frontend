import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendOrder} from '../components/actions/orderActions'
import { Link } from 'react-router-dom'
import { Segment, Card, List, Header, Button } from 'semantic-ui-react'

class Checkout extends Component {
  
      handleSendOrder= ()=>{
        let o = this.props.currentOrder
        let t = Math.round((this.props.total * 1.1)*100)/100
        this.props.sendOrder(t, o);
        }

    render() { 
        return (
                <div>
               <Header as="h1" color='teal'><center>
                Your Order</center></Header><center>
                <h3>User Information</h3>
                <List.Item>
                    Name: {this.props.currentUser.name}</List.Item>
                    <List.Item>
                 Address:{this.props.currentUser.address}</List.Item>
                <Link to="/">
                <Button content="Submit Order"
                    onClick={()=>{this.handleSendOrder()}}></Button></Link>
                 <Link to="/">
                <Button content="Cancel Order"
                    onClick={()=>{this.handleSendOrder()}}></Button></Link>
       
            </center>   
        </div>
        )}
}

const MSTP = (state) => {
    return {
        cart: state.cart,
        total: state.cartTotal,
        currentOrder: state.currentOrder,
        currentUser: state.currentUser
    }
}

const MDTP = (dispatch) => {
    return {
        sendOrder: (t, id) => { dispatch(sendOrder(t, id))}
    }
}

export default connect(MSTP, MDTP)(Checkout)