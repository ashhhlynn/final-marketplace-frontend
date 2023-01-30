import React from 'react';
import { List } from 'semantic-ui-react'

const AccountInfo = (props) => {
    let user = props.user
    return ( 
        <List>
        Name: {user.name}<br></br>
        Email: {user.email}<br></br>
        Address: {user.address}<br></br>
        Member Since: {user.updated_at.slice(6, -14)}
        </List>
    )
}

export default AccountInfo