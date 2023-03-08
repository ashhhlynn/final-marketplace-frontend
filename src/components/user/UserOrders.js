import React, {Component} from 'react';
import { Header, Divider, Card} from 'semantic-ui-react'
import OrderSummary from './OrderSummary'
import {connect} from 'react-redux';

class UserOrders extends Component {

    render () {
        const orders = this.props.user.orders.map((order) => (
              <OrderSummary order={order}/>
        ))       
        return (
            <div>
                <h2 ><center>order history</center><Divider></Divider></h2><br></br>
                {this.props.user.orders.length !== 0 ?
                    <Card.Group centered>
                        {orders} 
                    </Card.Group>
                : 
                    <center>You haven't placed any orders yet.</center>
                }
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
