import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import OrderSummary from './OrderSummary'
import { connect } from 'react-redux'
import { checkUser } from '../actions/userActions'

class UserOrders extends Component {

    componentDidMount () {
        this.props.checkUser()
    }

    render () {
        const orders = this.props.user.orders.map((order) => (
              <OrderSummary order={order} key={order.id} />
        ))       
        return (
            <div className="profile"><br></br><br></br>
                {this.props.user.orders.length !== 0 ?
                    <Card.Group centered>
                        {orders} 
                    </Card.Group>
                : 
                    <h5>You haven't placed any orders yet.</h5>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(null, mapDispatchToProps)(UserOrders)