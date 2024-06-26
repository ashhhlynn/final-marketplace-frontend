import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { List, Button, Divider } from 'semantic-ui-react';
import CartItem from './CartItem';

class ShoppingCartContainer extends Component {
       
    render() {
        const items = this.props.cart.map ( 
            item => <CartItem item={item} key={item.id}/>
        )
        return (
            <div className="cartContainer">   
                <h2>your basket ({items.length})</h2>
                <Divider></Divider>
                {this.props.cart.length === 0 ? 
                    <>
                    <h3>Your basket is empty.</h3>
                    </>
                :
                    <>
                    <List>{items}</List>
                    <h4>Subtotal: ${this.props.total.toFixed(2)}</h4>
                    <center>
                        <Button color="black" className="formButton" as={Link} to="/checkout" onClick={this.props.handleClose}>Checkout</Button>
                    </center>
                    </>
                }
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.cartTotal
    }
};

export default connect(mapStateToProps)(ShoppingCartContainer);