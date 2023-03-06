import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Divider, Header } from 'semantic-ui-react'
import { createUser } from './actions/userActions'

class Signup extends Component {

    state = {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        password: '',
        password_confirmation: ''
    }

    handleSubmit = (event, userData) => {
        event.preventDefault()
        this.props.createUser(userData)
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
            <Header as="h2">Register</Header>
            <Divider></Divider>
            <Form onSubmit={ (event) => {this.handleSubmit(event, this.state)} }>              
                <Form.Input
                    required
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={this.state.name} 
                    onChange={this.handleChange}            
                />
                <Form.Input
                    required
                    type="text"
                    id="email"
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                />
                <Form.Input
                    required
                    type="text"
                    id="address"
                    placeholder="Address"
                    value={this.state.address} 
                    onChange={this.handleChange}
                />       
                <Form.Input
                    required
                    type="text"
                    id="city"
                    placeholder="City"
                    value={this.state.city} 
                    onChange={this.handleChange}
                />   
                  <Form.Input
                    required
                    type="text"
                    id="state"
                    placeholder="State"
                    value={this.state.state} 
                    onChange={this.handleChange}
                />  
                 <Form.Input
                    required
                    type="text"
                    id="zip"
                    placeholder="Zip"
                    value={this.state.zip} 
                    onChange={this.handleChange}
                />  
                <Form.Input
                    required
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password} 
                    onChange={this.handleChange}
                /> 
                <Form.Input
                    required
                    id="password_confirmation"
                    placeholder="Confirm Password"
                    type="password"
                    value={this.state.password_confirmation} 
                    onChange={this.handleChange}
                />
                    <Form.Button content="Submit"/>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (userData) => { dispatch(createUser(userData)) }
    }
}

export default connect(null, mapDispatchToProps)(Signup)