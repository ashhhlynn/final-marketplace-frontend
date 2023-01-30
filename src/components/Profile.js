import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import { Segment, Button, Divider, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {createOrder} from './actions/orderActions'

class Profile extends Component {

    state = {
        orders: [],
    }

    handleCreateOrder() {
        if (this.props.currentOrder.length === 0) {
            let userId = this.props.user.id
            this.props.createOrder(userId)
        }
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
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='left'>
                <Divider vertical></Divider>
                <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <center><h1><i>Hi {this.props.user.name}!</i></h1></center>
                    <Divider></Divider><br></br>
                    <Link to="/products">
                    <Button content="Start Shopping" size="huge" color ="teal" onClick={()=>{this.handleCreateOrder()}}>        
                    </Button>
                    </Link>
                    <Header color='teal'>Account Information:</Header>
                    <AccountInfo user={this.props.user} key={this.props.user.id}/> 
                </Grid.Column>
                <Grid.Column>
                    <Header color='teal'>Order History:</Header>
                    {orders}
                </Grid.Column>
            </Grid.Row>
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
    return { createOrder: (userId) => { dispatch(createOrder(userId)) } }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)