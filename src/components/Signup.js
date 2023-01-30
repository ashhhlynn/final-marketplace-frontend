import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Divider } from 'semantic-ui-react'
import { createUser } from './actions/userActions'

class Signup extends Component {

    state = {
        name: '',
        email: '',
        address: '',
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
            <div id="signup-container">
            <center><i><h2>Register New Account</h2></i></center>
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
                <center>
                    <Form.Button content="Create Account" color="teal"/>
                </center>
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