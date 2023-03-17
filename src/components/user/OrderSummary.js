import React, { Component } from 'react'
import { Divider, Card, Icon, Table } from 'semantic-ui-react'
import Totals from '../checkout/Totals'

class OrderSummary extends Component {

    render () {
        let ot = (this.props.order.total- 10)/1.1
        const items = this.props.order.order_items.map((item => 
           <div className= "orderTable">
                <Table compact basic='very' fixed>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{item.title} </Table.Cell>
                            <Table.Cell textAlign="center"><i>by user</i>{item.seller}</Table.Cell>
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
                           Order #{this.props.order.id}  <Icon name="asterisk" size="small"> </Icon>  {this.props.order.created_at.substring(0, 10)} 
                        </h2>
                    </Card.Header> 
                    <Card.Content>
                        {items}
                        <Divider></Divider>
                        <Totals total={ot} />
                    </Card.Content>
                </Card>
                <br />
            </div>
        )
    }
}

export default OrderSummary
