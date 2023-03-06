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
             
                <h2 style={{fontWeight:"normal"}}>your cart ({items.length})</h2>
                <Divider></Divider>
                    {this.props.cart.length === 0 ? 
                      <>Your cart is empty.</>
                    :
                    <div>
                        <List>
                            {items}
                        </List>                
                        <Divider></Divider>
                        <h4 style={{fontWeight:"normal"}}>Subtotal: ${this.props.total}.00</h4>
                        <Link to="/checkout">
                        <Button style={{backgroundColor: "#26453e", color:"#FFFFF0", width: "300px", marginTop:"4%"}} onClick={this.props.handleClose}>Checkout</Button>
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