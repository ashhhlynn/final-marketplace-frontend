import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import Navbar from '../Navbar'
import UserProducts from './UserProducts'
import { List, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EditUser from './EditUser'
import { checkUser } from '../actions/userActions';
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
              
                  <Modal style={{ width:"350px"}}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon
                    >
                    <Modal.Content>
                      
                    <OrderSummary order={order} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders)
