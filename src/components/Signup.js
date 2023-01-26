import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
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
                    <h1 style={{color: 'black'}}>Create Account</h1>
                    <div>
                    <form noValidate autoComplete="off" id="signup-form" onSubmit={ (e) => {this.handleSubmit(e, this.state)} }>            
                        <input
                        required
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={this.state.name} 
                        onChange={this.handleChange}
                        
                        />
                        <input
                        required
                        type="text"
                        id="email"
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        />
                        <input
                        required
                        type="text"
                        id="address"
                        placeholder="Address"
                        value={this.state.address} 
                        onChange={this.handleChange}
                        />
                       
                        <input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        /> 
                        <input
                        id="password_confirmation"
                        placeholder="Confirm Password"
                        type="password"
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange}
                        /> 
                        <input type="submit"
                        />
                        <br></br><br></br>
                    </form>
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

