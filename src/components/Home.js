
import React, { Component } from "react";
import { connect } from "react-redux";
import {createOrder} from './actions/orderActions'
import Profile from './Profile'
import {  Segment } from 'semantic-ui-react'
import Greeting from './Greeting'
import ToggleLogin from './ToggleLogin'

class Home extends Component{

render() {
    if (this.props.currentUser.length === 0) {       
        return (
            <div className="header">
               
                <Segment placeholder>
            < ToggleLogin /></Segment>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                    <Profile />
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
