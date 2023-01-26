import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Header } from 'semantic-ui-react'
import { createUser } from './actions/userActions'

class Signup extends Component {

    state = {
        name: '',
        email: '',
        address: '',
        password: '',
        password_confirmation: ''
    }
    handleSubmit = (event, userData)  => {
        event.preventDefault()
       this.props.createUser(userData)
       }

    handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
    }

    render() {
        return (
                <div id="signup-container">
        <Header as='h1' color='teal'><center>Signup</center></Header>
                    <div>

                    <Form onSubmit={ (e) => {this.handleSubmit(e, this.state)} }>            
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
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        /> 
                        <Form.Input
                        id="password_confirmation"
                        placeholder="Confirm Password"
                        type="password"
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange}
                        /> 
                        <Form.Button content="submit"
                        />
                    </Form>
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (userData) => { dispatch(createUser(userData));
        }
    }
}

export default connect(null, mapDispatchToProps)(Signup);

