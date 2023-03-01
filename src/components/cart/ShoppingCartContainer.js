import React, {Component} from 'react';
import { connect } from "react-redux";
import { List, Header, Segment, Button, Divider } from 'semantic-ui-react'
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
                       <p>Your cart is empty.</p> 
                    :
                    <div>
                        <List>
                            {items}
                        </List>                
                        <Divider></Divider>
                        <h4>Subtotal: ${this.props.total}.00</h4><br></br>
                        <Link to="/checkout">
                        <Button style={{width: "317px"}}  size="large" onClick={this.props.handleClose}>CHECKOUT</Button>
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