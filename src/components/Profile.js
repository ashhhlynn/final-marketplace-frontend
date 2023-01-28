import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import { Segment, Container, Statistic, Card, List, Header, Message, Item } from 'semantic-ui-react'

class Profile extends Component {

state = {
    orders: [],
}

componentDidMount() {
    fetch("http://localhost:3000/orders")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                orders: data.filter((order) => order.user_id == this.props.user.id)
            })
        });
}

render() {
    const orders = this.state.orders.map((order) => (
        <li key={order.id}>Date: {order.updated_at.slice(6, -14)} | Total: ${order.total} | {order.order_items.length} Item(s)</li>
    ))
    return (
      <div>
        <Header color='teal'>Account Information:</Header>
        <AccountInfo user={this.props.user} key={this.props.user.id}/> 

        <Statistic.Group>
<Statistic><Statistic.Value>{orders.length}</Statistic.Value><Statistic.Label>Orders</Statistic.Label>
</Statistic>
<Statistic>
  <Statistic.Value>31,200</Statistic.Value>
  <Statistic.Label>Views</Statistic.Label>
</Statistic>
</Statistic.Group>

        <Header color='teal'>Order History:</Header>
       {orders}
       </div>
    )
}
}




const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(Profile)