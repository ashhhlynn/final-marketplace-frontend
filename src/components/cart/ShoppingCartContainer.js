import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

class ShoppingCartContainer extends Component {
       
    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        return (
            <div>   
             
                <Header as="h2">Your Cart ({items.length})</Header>
                <Divider></Divider>
                    {this.props.cart.length === 0 ? 
                       <Header as="h4">Your cart is empty.</Header> 
                    :
                    <div>
                        <List>
                            {items}
                        </List>                
                        <Divider></Divider>
                        <center><h4>Subtotal: 
                            ${this.props.total}.00</h4></center>
                        <Link to="/checkout">
                        <Button style={{backgroundColor: "#26453e", color:"#FFFFF0", width: "317px", marginTop:"4%"}}   size="large" onClick={this.props.handleClose}>CHECKOUT</Button>
                        </Link>
                    </div>
                    }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.cartTotal,
    }
}

export default connect(mapStateToProps)(ShoppingCartContainer)