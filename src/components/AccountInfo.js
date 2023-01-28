import React, {Component} from 'react';
import { Segment, List } from 'semantic-ui-react'

const AccountInfo = (props) => {
    let user = props.user
    return ( 
        <List>
        Name: {user.name}<br></br>
        Email: {user.email}<br></br>
        Address: {user.address}<br></br>
        </List>
    )
}

export default AccountInfo