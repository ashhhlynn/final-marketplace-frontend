import React, { Component } from "react";
import { connect } from 'react-redux';
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
                <div id="signup-container">
                    <h1 style={{color: 'black'}}>Login To Account</h1>
                    <div>
                    <form noValidate autoComplete="off" id="login-form" onSubmit={ (e) => {this.props.getExistingUser(e, this.state)} }>            
                        <input
                        required
                        id="email"
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        />
                        <br></br><br></br>
                       
                        <input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        /> 
                        <br></br><br></br>
                           
                        <input type="submit"
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '6px 25px',

                        }}/>
                    </form>
                    </div>                  
                </div>
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

