import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Segment, Card, List, Header } from 'semantic-ui-react'


class Profile extends Component {


    render() {
        
        return (
        <div>


<Header color='teal' size='huge'> 

Hi {this.props.user.name}!</Header>
<Header>User Info:</Header>

        Email: {this.props.user.email}<br></br>
    Address: {this.props.user.address}
    <Header>User Orders:</Header>
        </div>
        )
    }
}

const MSTP = (state) => {
    return {
        user: state.currentUser,
    }
}

const MDTP = (dispatch) => {
    return {

    }
}

export default connect(MSTP, MDTP)(Profile)