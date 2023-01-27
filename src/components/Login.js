import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Header } from "semantic-ui-react";
import {getExistingUser} from './actions/userActions';

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event, userData)  => {
        event.preventDefault()
        this.props.getExistingUser(userData)
    }

    render() {
        return (
            <div id="signup-border">
        <Header as='h2' color='teal'>
            <center>Login</center>
        </Header>         
        <Form onSubmit={ (e) => { this.handleSubmit(e, this.state)}}>
            <Form.Input
                id="email"
                placeholder="Email"
                value={this.state.email} 
                onChange={this.handleChange}
                />               
                        <Form.Input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        /> 
                    <center>
                    <Form.Button content='Submit' />
                    </center>
        </Form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
       getExistingUser: (userData) => { dispatch(getExistingUser(userData));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);