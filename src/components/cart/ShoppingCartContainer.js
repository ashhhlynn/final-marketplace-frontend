import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

class ShoppingCartContainer extends Component {
       
    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        return (
            <div>   
                <h2 style={{ marginBottom:"7%"}}>your cart ({items.length})</h2>
                <Divider></Divider>
                    {this.props.cart.length === 0 ? 
                      <><h3>Your cart is empty.</h3></>
                    :
                    <div>
                      <List>{items}</List>
                        <h4 >Subtotal: ${this.props.total.toFixed(2)}</h4>
                        <Link to="/checkout">
                        <Button style={{backgroundColor: "#26453e", color:"#FFFFF0", width: "337px", marginTop:"4%"}} onClick={this.props.handleClose}>Checkout</Button>
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