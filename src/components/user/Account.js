import React, { Component } from 'react'
import EditUser from './EditUser'
import { Divider } from 'semantic-ui-react'

class Account extends Component {

    render() {               
        return (
           <div className="profile">   
                <div className="account">
                    <EditUser />
                </div>
            </div>
        )
    }
}

export default Account