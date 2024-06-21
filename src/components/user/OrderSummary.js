import React from 'react'
import { Divider, Card, Table } from 'semantic-ui-react'
import Totals from '../checkout/Totals'

const OrderSummary = (props) => {

    let ot = (props.order.total- 10)/1.1
    const items = props.order.order_items.map(item => {
        return ( 
            <div className= "orderTable" key={item.id}>
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
        )
    })      
    return (
        <div className="orderSummary">
            <Card key={props.order.id}>
                <Card.Header >
                    <h2>Order #{props.order.id} | {props.order.created_at.substring(0, 10)}</h2>
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

export default OrderSummary