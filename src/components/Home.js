
import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import {  Segment } from 'semantic-ui-react'
import Greeting from './Greeting'
import ToggleLogin from './ToggleLogin'
import Navbar from './Navbar'

class Home extends Component{

    render() {
        if (this.props.currentUser.length === 0) {       
            return (
                <div>
                    <Greeting />
                    <Segment placeholder>
                        <ToggleLogin />
                    </Segment>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Navbar />
                    <Profile />
                </div>
            )
        }
    }

}
          
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}
  
export default connect(mapStateToProps)(Home)
