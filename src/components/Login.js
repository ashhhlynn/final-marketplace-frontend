import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form } from "semantic-ui-react";
import { getExistingUser } from './actions/userActions';

class Login extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event, userData)  => {
        event.preventDefault()
        this.props.handleRoute()
        this.props.getExistingUser(userData)
    };

    render() {
        return (
            <>          
            <h2>Sign In</h2>
            <Form style={{width:"400px"}} onSubmit={(event) => {this.handleSubmit(event, this.state)}}>
                <Form.Input
                    required
                    id="email"
                    placeholder="Email"
                    value={this.state.email} 
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
                <Form.Button circular content='Submit' />
            </Form>
            </>
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
       getExistingUser: (userData) => { dispatch(getExistingUser(userData)) }
    }
};

export default connect(null, mapDispatchToProps)(Login);