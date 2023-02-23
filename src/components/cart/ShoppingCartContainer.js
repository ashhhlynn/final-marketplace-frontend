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
                <Segment style={{ width:"550px", margin: "0 auto"}}>
                <center><h2><i>Cart ({items.length})</i></h2></center>
                    <Divider></Divider>
                    {this.props.cart.length === 0 ? 
                        <center>Your cart is empty!</center>
                    :
                        <div>
                        <List>
                            {items}
                        </List>                
                        <Divider></Divider>
                        
                        <h4>Subtotal: ${this.props.total}</h4>
                        <Link to="/checkout"><Button size="big" content="CHECKOUT" onClick={this.props.handleClose}></Button></Link>
                        
                        </div>
                    }
                </Segment>
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