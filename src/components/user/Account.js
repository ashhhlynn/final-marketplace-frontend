import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditUser from './EditUser'
import { Divider } from 'semantic-ui-react'

class Account extends Component {

    render() {               
        return (
           <div className="profile">   
                <h2 >account info<Divider></Divider></h2>
                <EditUser />
            </div>
        )
    }
}


export default Account