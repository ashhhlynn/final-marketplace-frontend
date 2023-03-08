import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditUser from './EditUser'
import { Divider, Header } from 'semantic-ui-react'

class Account extends Component {

    render() {               
        return (
           <div>    
                <h2 ><center>account info</center><Divider></Divider></h2>
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