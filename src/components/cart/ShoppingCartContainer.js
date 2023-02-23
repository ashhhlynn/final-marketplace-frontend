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
                <Segment style={{ width:"600px", margin: "0 auto"}}>
                    <Header as="h2"><center><i>Shopping Cart ({items.length})</i> </center></Header>
                    <Divider></Divider>
                    <List>
                        {items}
                    </List>
                    <Divider></Divider>
                    <center>
                        <h4>Subtotal: ${this.props.total}</h4>
                        <Link to="/checkout"><Button size="big" content="CHECKOUT" ></Button></Link>
                    </center>
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