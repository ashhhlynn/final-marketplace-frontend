import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Divider, Segment } from 'semantic-ui-react'
import { editUser } from '../actions/userActions'

class EditUser extends Component {

    state = {
        name: this.props.user.name,
        address: this.props.user.address,
        id: this.props.user.id
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
            <Segment placeholder style={{ width:"600px"}}>
            <i><h2><center>Edit Account</center></h2></i>
            <Divider></Divider>
            <Form onSubmit={ (event) => {this.handleSubmit(event, this.state)} }>              
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
                    <center><Form.Button position="center" size="big" content="SUBMIT"/></center>
                </Form>
                </Segment>
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