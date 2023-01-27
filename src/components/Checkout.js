import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Segment, Header, } from 'semantic-ui-react'
import AccountInfo from './AccountInfo'

class Checkout extends Component {
  
    render() { 
        return (
                <div>
               <Header as="h1" color='teal'><center>
                Your Order</center></Header><center>
                <h3>Total: ${Math.round((this.props.total * 1.1)*100)/100}</h3>
                <h3>User Information:</h3>
                <AccountInfo user={this.props.currentUser} key={this.props.currentUser.id}/> <br></br>
            </center>   
        </div>
        )}
}

const MSTP = (state) => {
    return {
        total: state.cartTotal,
        currentUser: state.currentUser
    }
}

export default connect(MSTP)(Checkout)