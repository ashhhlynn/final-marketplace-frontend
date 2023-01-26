import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'

import { Segment, Card, List, Header } from 'semantic-ui-react'
import { getPreviousOrders } from "./actions/orderActions";


class Profile extends Component {

    state = {
       orderz: [],
       or: [],
       o: [],
    }

    componentDidMount() {
        fetch("http://localhost:3000/orders")
        .then((response) => response.json())
        .then((orders) => 
        this.setState({
            orderz: orders       
        })
        )
      }

    render() {
        const orders = this.state.orderz.map((order) => (
            <li key={order.id}>user: {order.user_id} Total: ${order.total}: {order.order_items.length} Product</li>
        ))



        return (
        <div>

<center>
<Header color='teal' size='huge'> 

Hi {this.props.user.name}!</Header>
<Header>User Info:</Header>

<AccountInfo user={this.props.user} key={this.props.user.id}/> <br></br>


Name: {this.props.user.name}<br></br>

        Email: {this.props.user.email}<br></br>
    Address: {this.props.user.address}
    <Header>User Orders:</Header>
    {orders}
    </center>
        </div>
        )
    }
}

const MSTP = (state) => {
    return {
        user: state.currentUser,
        orders: state.previousOrders,
    }
}

const MDTP = (dispatch) => {
    return {
        getPreviousOrders: (id) => { dispatch(getPreviousOrders(id)) },

    }
}

export default connect(MSTP, MDTP)(Profile)