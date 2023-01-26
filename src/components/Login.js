import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form } from "semantic-ui-react";
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

 

    render() {
        return (
            <div id="signup-border">
                    <h1 style={{color: 'black'}}>Login</h1>
                 
                    <Form onSubmit={ (e) => { this.props.getExistingUser(e, this.state)}}>
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
                    <center><Form.Button content='Submit' /></center>
                    </Form>
                                
                </div>
          
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
       getExistingUser: (event, userData) => { dispatch(getExistingUser(event, userData));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);

