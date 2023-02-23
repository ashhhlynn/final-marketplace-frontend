import React, {Component} from 'react';
import { Divider, Card } from 'semantic-ui-react'

class OrderSummary extends Component {

    render () {
        const items = this.props.order.order_items.map((item => 
           <li> Item {item.id} | Price: {item.price} | Title: {item.product_id} </li>
        ))        
        return (
        <div>
            <Card centered style={{ width:"350px"}}>
            <Card.Content>
                <Card.Header>Order # {this.props.order.id}</Card.Header>
                <Card.Description>
                    Order Date: {this.props.order.updated_at.slice(6, -14)}<br></br><br></br>
                    Items:<br></br><br></br>
                    {items}
                    <Divider></Divider>
                    Total: ${this.props.order.total}
                </Card.Description> 
            </Card.Content>
            </Card>
        </div>
        )
    }
}

export default OrderSummary
