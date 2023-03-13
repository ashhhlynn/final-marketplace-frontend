import React, {Component} from 'react';
import { Divider, Card, Icon, Table} from 'semantic-ui-react'
import Totals from '../checkout/Totals'

class OrderSummary extends Component {

    render () {
        let ot = (this.props.order.total- 10)/1.1
        const items = this.props.order.order_items.map((item => 
           <div className= "orderTable">
                <Table compact basic='very'>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{item.title} <i>by user{item.seller}</i></Table.Cell>
                            <Table.Cell textAlign="right">${item.price.toFixed(2)}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
           </div>
        ))        
        return (
            <div className="orderSummary">
                <Card>
                    <Card.Header >
                        <h2> 
                            Order #{this.props.order.id}
                            <p floated="right"  style={{ marginTop:"-7%"}}>{this.props.order.created_at.substring(0, 10)}<Icon name="checkmark"></Icon></p> 
                        </h2>
                    </Card.Header> 
                    <Card.Content>
                        {items}
                        <Divider></Divider>
                        <Totals total={ot} />
                    </Card.Content>
                </Card>
                <br></br>
            </div>
        )
    }
}

export default OrderSummary
