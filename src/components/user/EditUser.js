import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Divider, Segment } from 'semantic-ui-react'
import { editUser } from '../actions/userActions'
import Navbar from '../Navbar'

class EditUser extends Component {

    state = {
        name: this.props.user.name,
        address: this.props.user.address,
        id: this.props.user.id
    }

    handleSubmit = (event, user) => {
        event.preventDefault()
        this.props.editUser(user)
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <center>
            <Segment position="center" style={{ width:"640px", positionAlign:"center"}}>

            <i><h2>Edit Account</h2></i>
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
                    id="address"
                    placeholder="Address"
                    value={this.state.address} 
                    onChange={this.handleChange}
                />       
                    <Form.Button size="big" content="SUBMIT"/>
                </Form>
                </Segment>
                </center>
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
     editUser: (user) =>  { dispatch(editUser(user)) } 

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)