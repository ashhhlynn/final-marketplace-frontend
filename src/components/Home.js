import React, { Component } from "react";
import { connect } from "react-redux";
import About from './About'
import {  Segment } from 'semantic-ui-react'
import Navbar from './Navbar'
import OtherNavbar from './OtherNavbar'
import { Link } from 'react-router-dom'

class Home extends Component{

    render() {
        if (this.props.currentUser.length === 0) {       
            return (
                <div>
                    <OtherNavbar />
                    <Segment>
                   
                        <About />
                    
                  
                    </Segment>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Navbar />
                    <Segment>   
                        <About />
                    </Segment>
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
