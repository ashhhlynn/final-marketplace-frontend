import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import { editUser } from '../actions/userActions'

class EditUser extends Component {

    state = {
        name: this.props.user.name,
        address: this.props.user.address,
        id: this.props.user.id,
        city: this.props.user.city,
        state: this.props.user.state,
        zip: this.props.user.zip
    }

    handleSubmit = (event, users) => {
        event.preventDefault()
        this.props.editUser(users)
        this.props.handleClose();
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <Form onSubmit={ (event) => {this.handleSubmit(event, this.state)} }> 
                <Form.Input 
                    readOnly
                    required
                    type="text"
                    id="email"
                    label="Email"
                    value={this.props.user.email}       
                />             
                <Form.Input
                    required
                    type="text"
                    id="name"
                    label="Name"
                    value={this.state.name} 
                    onChange={this.handleChange}            
                />
                <Form.Input 
                    required
                    type="text"
                    id="address"
                    label="Street"
                    value={this.state.address} 
                    onChange={this.handleChange}
                />       
            <Form.Group>
                <Form.Input  width={8}
                    required
                    type="text"
                    id="city"
                    label="City"
                    value={this.state.city} 
                    onChange={this.handleChange}
                />   
                  <Form.Input width={5}
                    required 
                    type="text"
                    id="state"
                    label="State"
                    value={this.state.state} 
                    onChange={this.handleChange}
                /> 
                 <Form.Input width={3} 
                    required
                    type="text"
                    id="zip"
                    label="Zip"
                    value={this.state.zip} 
                    onChange={this.handleChange}
                />  
            </Form.Group>
                <center>
                <Form.Button position="center" inverted style={{color:"#ffffff", backgroundColor:"#000000", width:"300px", marginTop:"2%"}}content="Update"/>
                </center>
            </Form>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
    user: state.currentUser
}}

const mapDispatchToProps = dispatch => {
    return {
     editUser: (user) =>  { dispatch(editUser(user)) } ,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)