import React, {Component} from 'react';
import { Divider, Segment} from 'semantic-ui-react'

class OrderSummary extends Component {

    render () {
        const items = this.props.order.order_items.map((item => 
           <li> Item {item.id} | Price: {item.price} | Title: {item.product_id} </li>
        ))        
        return (
        <div>
            <Segment centered style={{ width:"600px", fontfamily: "Courier New"}}> 
            <i><h2><center>Order Summary</center></h2></i>
       
                    <Divider></Divider>
                    <p>Order #{this.props.order.id}</p>
                    <p>Date: {this.props.order.updated_at.slice(6, -14)}</p>
                    <p>Items:</p>
                    {items}
                    <Divider></Divider>
                    Subtotal: ${Math.round((this.props.order.total / 1.1)*100)/100}<br></br>
                    Tax: ${Math.round((this.props.order.total / 1.1 * .1)*100)/100}<br></br>
                    <b>Total: ${this.props.order.total}</b>
             </Segment>
        </div>
        )
    }
}

export default OrderSummary
