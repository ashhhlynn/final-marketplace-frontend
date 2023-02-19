import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import Navbar from '../Navbar'
import UserProducts from './UserProducts'
import UserOrders from './UserOrders'

import { Segment, Button, Divider, Header, Grid, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EditUser from './EditUser'
import { checkUser } from '../actions/userActions';


class Profile extends Component {

    state = {
        modalOpen: false
    }
  
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.setState({ modalOpen: false })
    }

    render() {
        const orders = this.props.user.orders.map((order) => (
            <li key={order.id}>Date: {order.updated_at.slice(6, -14)} | Total: ${order.total} </li>
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
                    <Button size="medium" position="center" content="EDIT" onClick={this.handleOpen} >
                    </Button>
                    <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon
                    >
                    <Modal.Content>
                        <EditUser handleClose={this.handleClose} />
                    </Modal.Content>
                    </Modal>
                    </center>
                </Grid.Column>
                <Grid.Column>
                    <Header>Order History:</Header>
                       <UserOrders />
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


const mapDispatchToProps = (dispatch) => {
    return {
      checkUser: () =>  { dispatch(checkUser()) },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)