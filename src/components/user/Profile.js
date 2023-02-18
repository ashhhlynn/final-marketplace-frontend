import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import Navbar from '../Navbar'
import UserProducts from './UserProducts'
import { Segment, Button, Divider, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Profile extends Component {

    render() {
        const orders = this.props.user.orders.map((order) => (
            <li key={order.id}>Date: {order.updated_at.slice(6, -14)} | Total: ${order.total} | {order.order_items.length} Item(s)</li>
        ))        
        return (
           <div>
            <Navbar />
            <Segment>
                <center><h2><i>Hi {this.props.user.name}!</i></h2></center>
                <Divider></Divider>
                <Grid columns={2} stackable textAlign='left'>
                <Grid.Column>
                    <Header><center>Account Information: </center></Header>
                    <center>
                    <AccountInfo user={this.props.user} key={this.props.user.id} /> 
                    <Link to='/edituser'><Button size="medium" position="center" content="EDIT" >
                    </Button></Link>
                    </center>
                </Grid.Column>
                <Grid.Column>
                    <Header>Order History:</Header>
                        {orders}
                    <Header>Your Products:</Header>
                        <UserProducts />
                </Grid.Column>
            </Grid>
        </Segment>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

export default connect(mapStateToProps)(Profile)