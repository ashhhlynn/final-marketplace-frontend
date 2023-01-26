import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendOrder} from '../components/actions/orderActions'
import { Link } from 'react-router-dom'
import { Segment, Card, List, Header, Button } from 'semantic-ui-react'
import AccountInfo from './AccountInfo'

class Checkout extends Component {
  
      handleSendOrder= ()=>{
   if (this.props.cart.length === 0){
alert('Must have items in cart')

   }
else{
        let o = this.props.currentOrder
        let t = Math.round((this.props.total * 1.1)*100)/100
        this.props.sendOrder(t, o);
        }}

    render() { 
        return (
                <div>
               <Header as="h1" color='teal'><center>
                Your Order</center></Header><center>
                <h3>Subtotal: ${this.props.total}</h3>
                <h3>Plus Tax</h3>
                <h3>Total: ${Math.round((this.props.total * 1.1)*100)/100}</h3>
                <h3>User Information</h3>

                <AccountInfo user={this.props.currentUser} key={this.props.currentUser.id}/> <br></br>


                <List.Item>
                    Name: {this.props.currentUser.name}</List.Item>
                    <List.Item>
                 Address:{this.props.currentUser.address}</List.Item>
                 <Link to="/">
                <Button content="Submit Order"
                    onClick={()=>{this.handleSendOrder()}}></Button></Link>
                
                <Button content="Cancel Order"
                    onClick={()=>{this.handleSendOzrder()}}></Button>
       
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