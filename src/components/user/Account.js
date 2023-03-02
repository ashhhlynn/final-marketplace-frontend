import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditUser from './EditUser'
import { Divider, Header } from 'semantic-ui-react'

class Account extends Component {

    render() {               
        return (
           <div>    
                <Header as="h2">Your Account<Divider></Divider></Header>
                <EditUser />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

export default connect(mapStateToProps)(Account)