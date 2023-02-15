import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import Navbar from './Navbar'

import { Segment, Button, Divider, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {createOrder} from './actions/orderActions'

class Profile extends Component {

    handleCreateOrder() {
        if (this.props.currentOrder.length === 0) {
            let userId = this.props.user.id
            this.props.createOrder(userId)
        }
    }

    render() {
        const orders = this.props.user.orders.map((order) => (
            <li key={order.id}>Date: {order.updated_at.slice(6, -14)} | Total: ${order.total} | {order.order_items.length} Item(s)</li>
        ))
        return (
            <Segment>
                                    <Navbar />

                <center><h2><i>Hi {this.props.user.name}!</i></h2></center>
                <Divider></Divider>
                <Grid columns={2} stackable textAlign='left'>
                <Grid.Column>
                    <Header><center>Account Information:                         
                    </center> </Header><center>
                    <AccountInfo user={this.props.user} key={this.props.user.id} /> 
                    <Button size="big" position="center" content="EDIT" >
        </Button></center>
                </Grid.Column>
                <Grid.Column>
                    <Header>Order History:</Header>
                        {orders}
                        <Header>Your Products:</Header>
                        <li>Test Product | $100.00  <Button size="tiny"  content="EDIT"></Button>
</li>
                </Grid.Column>
            </Grid>
        </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
        currentOrder: state.currentOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        createOrder: (userId) => { dispatch(createOrder(userId)) }, 
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)