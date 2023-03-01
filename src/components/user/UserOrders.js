import React, {Component} from 'react';
import { Modal, Header, Grid, Divider, Segment} from 'semantic-ui-react'
import OrderSummary from './OrderSummary'
import {connect} from 'react-redux';
import AccountNav from './AccountNav'

class UserOrders extends Component {

    state = {
        modalOpen: false
    }
  
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.setState({ modalOpen: false })
    }

    render () {
        const orders = this.props.user.orders.map((order) => (
              <OrderSummary order={order}/>
        ))       
        return (
            <div>
                <Grid columns={2} stackable textAlign='left'>
                    <Grid.Column style= {{width: "370px"}}>
                        <AccountNav/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft:"8%", marginTop:"2%", background:""}}>
                    
                    <Header as="h2">Your Orders</Header> 
                        <Divider></Divider> 
                   
                    {orders}     
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

export default connect(mapStateToProps)(UserOrders)
