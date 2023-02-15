
import React, { Component } from "react";
import { connect } from "react-redux";
import About from './About'
import {  Segment, Header, Button } from 'semantic-ui-react'
import Greeting from './Greeting'
import ToggleLogin from './ToggleLogin'
import Navbar from './Navbar'
import ShoppingLinks from './ShoppingLinks'
import { Link } from 'react-router-dom'

class Home extends Component{

    render() {
        if (this.props.currentUser.length === 0) {       
            return (
                <div>
                     <Segment>
                    <center>
                       
                        <About />
             <Link to="/start"><Button content="GET STARTED" size="large"></Button></Link>
<br></br>
                        <br></br>
                        </center>
                        </Segment>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Segment>
                        <Navbar />
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
