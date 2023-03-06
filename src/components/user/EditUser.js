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
        <div>
            <Form onSubmit={ (event) => {this.handleSubmit(event, this.state)} }> 
            <Form.Input 
                    readOnly
                    required
                    type="text"
                    id="email"
                    label="Email"
                    placeholder="Email"
                    value={this.props.user.email} 
                        
                />             
                <Form.Input
                    required
                    type="text"
                    id="name"
                    label="Name"
                    placeholder="Name"
                    value={this.state.name} 
                    onChange={this.handleChange}            
                />
                <Form.Input
                    required
                    type="text"
                    id="address"
                    label="Address"
                    placeholder="Address"
                    value={this.state.address} 
                    onChange={this.handleChange}
                />       

<Form.Input
                    required
                    type="text"
                    id="city"
                    label="City"
                    placeholder="City"
                    value={this.state.city} 
                    onChange={this.handleChange}
                />   
                  <Form.Input
                    required
                    type="text"
                    id="state"
                    label="State"
                    placeholder="State"
                    value={this.state.state} 
                    onChange={this.handleChange}
                />  
                 <Form.Input
                    required
                    type="text"
                    id="zip"
                    label="Zip"
                    placeholder="Zip"
                    value={this.state.zip} 
                    onChange={this.handleChange}
                />  
                    <center><Form.Button position="center" content="Update"/></center>
                </Form>
            </div>
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