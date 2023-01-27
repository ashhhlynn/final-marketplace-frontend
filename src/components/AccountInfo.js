import React, {Component} from 'react';
import { Segment, Card, List, Header } from 'semantic-ui-react'


class AccountInfo extends Component {

    render() {
        const user = this.props.user
        return (
        <div>
        <center>
            Name: {user.name}<br></br>
            Email: {user.email}<br></br>
            Address: {user.address}
        </center>
        </div>
        )
    }
}


export default AccountInfo