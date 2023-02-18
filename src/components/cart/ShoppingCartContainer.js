import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import {checkUser} from '../actions/userActions'

class ShoppingCartContainer extends Component {
       
    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        return (
            <div>   
                <Navbar/>                
                    <Segment style={{ width:"640px", position:"center"}}>
                        <Header as="h2"><center><i>Shopping Cart ({items.length})</i> </center></Header>
                        <Divider></Divider>
                        <List>
                            {items}
                        </List>
                        <Divider></Divider>
                        <h4>Subtotal: ${this.props.total}</h4>
                        <Link to="/checkout"><Button size="big" content="CHECKOUT" ></Button></Link>
                    </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.cartTotal,
        currentOrder: state.currentOrder,
        user: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer)