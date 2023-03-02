import React, {Component} from 'react';
import { Header, Divider} from 'semantic-ui-react'
import OrderSummary from './OrderSummary'
import {connect} from 'react-redux';

class UserOrders extends Component {

    render () {
        const orders = this.props.user.orders.map((order) => (
              <OrderSummary order={order}/>
        ))       
        return (
            <div>
                    <Header as="h2">Your Orders</Header> 
                        <Divider></Divider> 
                    {orders}     
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
