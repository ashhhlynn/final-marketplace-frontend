import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import { Form } from 'semantic-ui-react'

class PaymentForm extends Component {

    state = {
        cardNumber: '',
        expirationDate: '',
        cvc: '',
        billingAddress: '',
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event, state)  => {
        event.preventDefault()
    }

    render() {
        return (        
            <Form size="tiny" onSubmit={ (event) => { this.handleSubmit(event, this.state)}}>
            <Form.Input
              required
              type="text"
              id="cardNumber"
              placeholder="Card Number"
              value={this.state.cardNumber} 
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="text"
              id="expirationDate"
              placeholder="Expiration Date"
              value={this.state.expirationDate} 
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="text"
              id="cvc"
              placeholder="CVC"
              value={this.state.cvc} 
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="text"
              id="billingAddress"
              placeholder="Billing Address"
              value={this.state.billingAddress} 
              onChange={this.handleChange}
            />
            <center>
            <Form.Button size='tiny' content='SET' />
            </center>
        </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (id) => { dispatch(removeFromCart(id)) } }
}

export default connect(null, mapDispatchToProps)(PaymentForm)