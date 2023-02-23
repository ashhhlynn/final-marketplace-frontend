import React, {Component} from 'react';
import { Divider, Segment} from 'semantic-ui-react'

class OrderSummary extends Component {

    render () {
        const items = this.props.order.order_items.map((item => 
           <li> Item {item.id} | Price: {item.price} | Title: {item.product_id} </li>
        ))        
        return (
        <div>
            <Segment placeholder centered style={{ width:"600px"}}>        
                    <h2><i><center>Order #{this.props.order.id}</center></i></h2>
                    <Divider></Divider>
                    <p>Order Date: {this.props.order.updated_at.slice(6, -14)}</p>
                    <p>Items:</p>
                    {items}
                    <Divider></Divider>
                    Total: ${this.props.order.total}
             </Segment>
        </div>
        )
    }
}

export default OrderSummary
