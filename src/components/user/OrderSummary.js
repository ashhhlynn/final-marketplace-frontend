import React, {Component} from 'react';
import { Divider, Segment, Header} from 'semantic-ui-react'

class OrderSummary extends Component {

    render () {
        const items = this.props.order.order_items.map((item => 
           <li> Item {item.id} | ${item.price} </li>
        ))        
        return (
        <div>
            <Segment style={{  width:"610px"}}> 
                <h4 style={{textAlign:"right"}}>{this.props.order.updated_at.slice(6, -14)}-2023</h4>
                <h4 style={{marginTop:"-5.5%"}}>Order #{this.props.order.id}</h4>    
                    {items}
                <Divider></Divider> 
                Subtotal  ${Math.round((this.props.order.total / 1.1)*100)/100}<br></br>
                Tax ${Math.round((this.props.order.total / 1.1 * .1)*100)/100}<br></br>
                Total  ${this.props.order.total}
            </Segment>
            <br></br>
        </div>
        )
    }
}

export default OrderSummary
