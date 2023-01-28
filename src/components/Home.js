
import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from './Signup'
import Login from './Login'
import {createOrder} from './actions/orderActions'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import { Button, Segment, Divider, Grid, Header } from 'semantic-ui-react'
import Greeting from './Greeting'
import ToggleLogin from './ToggleLogin'


class Home extends Component{

handleCreateOrder() {
    if (this.props.currentOrder.length === 0) {
        let userId = this.props.currentUser.id
        this.props.createOrder(userId)
    }
}

render() {
    if (this.props.currentUser.length === 0) {       
        return (
            <div className="header">
                < Greeting />
                <Segment placeholder>
            < ToggleLogin /></Segment>

                <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                <Grid.Row>
                <Grid.Column>
                    < Signup />
                </Grid.Column>
                <Grid.Column>
                    < Login />
                </Grid.Column>
                </Grid.Row>
                </Grid>
                </Segment>
            </div>
        )
    }
    else {
        return (
            <div className="header">
                <Segment placeholder>
                <center>
                    <h2><i>Hi {this.props.currentUser.name}!</i> </h2>
                    <Link to="/products">
                        <Button content="Start Shopping" color ="teal" onClick={()=>{this.handleCreateOrder()}}></Button>
                    </Link>
                    <Divider></Divider>
                </center>
                <br></br>
                    <Profile />
                </Segment>
            </div>
        )
    }
}
}
            
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        currentOrder: state.currentOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return { createOrder: (userId) => { dispatch(createOrder(userId)) } }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)
