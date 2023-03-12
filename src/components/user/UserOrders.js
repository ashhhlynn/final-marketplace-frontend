import React, {Component} from 'react'
import { Divider, Card} from 'semantic-ui-react'
import OrderSummary from './OrderSummary'
import {connect} from 'react-redux'
import {checkUser} from '../actions/userActions'

class UserOrders extends Component {

    componentDidMount () {
        this.props.checkUser()
    }

    render () {
        const orders = this.props.user.orders.map((order) => (
              <OrderSummary order={order} key={order.id}/>
        ))       
        return (
            <div className="profile">
                <h2 >order history<Divider></Divider></h2><br></br>
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
