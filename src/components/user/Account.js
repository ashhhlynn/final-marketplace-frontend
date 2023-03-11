import React, {Component} from 'react'
import EditUser from './EditUser'
import { Divider } from 'semantic-ui-react'

class Account extends Component {

    render() {               
        return (
           <div className="profile">   
                <h2 >user information<Divider></Divider></h2>
                <EditUser />
            </div>
        )
    }
}


export default Account