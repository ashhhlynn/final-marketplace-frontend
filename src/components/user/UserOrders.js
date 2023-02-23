import React, {Component} from 'react';
import { Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import OrderSummary from './OrderSummary'

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
            <li key={order.id}>
                <Link onClick={this.handleOpen}>#{order.id} </Link>               
                <Modal style={{ display: "inline-block", width: "auto"}}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon
                >
                    <Modal.Content>                     
                        <OrderSummary order={order} key={order.id}/>
                    </Modal.Content>
                </Modal>
                Date: {order.updated_at.slice(6, -14)}
            </li>
        ))       
        return (
            <div>
                {orders}
            </div>
        )
    }
}



export default UserOrders
