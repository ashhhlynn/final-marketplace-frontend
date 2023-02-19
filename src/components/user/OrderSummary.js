import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import Navbar from '../Navbar'
import UserProducts from './UserProducts'
import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EditUser from './EditUser'
import { checkUser } from '../actions/userActions';


class OrderSummary extends Component {

   


    render () {
        const items = this.props.order.order_items.map((item => 
           <li> Item {item.id} | Price: {item.price} | Title: {item.product_id} </li>
        ))        
        return (
        <div>
            <h2>Order # {this.props.order.id}</h2>
            <h4>Order Date: {this.props.order.updated_at.slice(6, -14)}</h4>
            <h4>Items:</h4>
            {items}
            <Divider></Divider>
            <h4>Total: ${this.props.order.total}</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)
