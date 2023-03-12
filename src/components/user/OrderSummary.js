import React, {Component} from 'react';
import { Divider, Card, Icon, Table} from 'semantic-ui-react'
import Totals from '../checkout/Totals'

class OrderSummary extends Component {

    render () {
        let ot = (this.props.order.total- 10)/1.1
        const items = this.props.order.order_items.map((item => 
           <div> 
                <Table compact basic='very' style={{marginTop:"2%", width:"390px"}}>
                    <Table.Body><Table.Row>
                        <Table.Cell>{item.title} <i>by user{item.seller}</i></Table.Cell>
                        <Table.Cell textAlign="right">${item.price.toFixed(2)}</Table.Cell>
                    </Table.Row></Table.Body>
                </Table>
           </div>
        ))        
        return (
            <div>
                <Card style={{width:"500px"}}>
                    <Card.Header style={{ height:"47px"}}>
                        <h2 style={{textAlign:"left", marginLeft:"2%", marginTop:"2%"}}> 
                            Order #{this.props.order.id}
                            <p floated="right" style={{ marginTop:"-7%", textAlign:"right"}}>{this.props.order.created_at.substring(0, 10)}<Icon name="checkmark"></Icon></p> 
                        </h2>
                    </Card.Header> 
                    <Card.Content style={{marginLeft:"7%"}}>
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
