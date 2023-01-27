import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import { Segment, Card, List, Header } from 'semantic-ui-react'

class Profile extends Component {

    state = {
       userOrders: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/orders")
            .then((response) => response.json())
            .then((data) => {
                this.setState({userOrders: data.filter((order) => order.user_id !== this.props.user.id)
            });
        });
    }

    render() {
        const orders = this.state.userOrders.map((order) => (
            <li key={order.id}>Date: {order.updated_at.slice(6, -14)} | Total: ${order.total} | {order.order_items.length} Item(s)</li>
        ))
        return (
        <div>
        <center>
        <Header>Information:</Header>
        <AccountInfo user={this.props.user} key={this.props.user.id}/> 
        <Header>Orders:</Header>
        {orders}
        </center>
        </div>
        )
    }
}

const MSTP = (state) => {
    return {
        user: state.currentUser
    }
}

export default connect(MSTP)(Profile)