import React, {Component} from 'react';
import { Divider, Segment, Card, Item, Icon, Table} from 'semantic-ui-react'
import Totals from '../checkout/Totals'

class OrderSummary extends Component {

    render () {
        let ot = (this.props.order.total- 10)/1.1
        const items = this.props.order.order_items.map((item => 
           <div> 
               <Table compact basic='very' size="small" singleline style={{borderTop: "0px", marginTop:"2%", width:"390px"}}>
                <Table.Cell style={{borderTop:"0"}}>{item.title} <i>by user{item.seller}</i></Table.Cell>
                <Table.Cell style={{border:"0"}} textAlign="right">${item.price.toFixed(2)}</Table.Cell>
                </Table>
           </div>
        ))        
        return (
        <div>
            <Card style={{width:"440px"}}>
            <Card.Header style={{background:"#e9f0ec", height:"40px"}}>
            <h2 style={{fontSize:"20px", textAlign:"right",  marginRight:"1%", marginTop:"1.5%"}}> Order #{this.props.order.id}</h2>
            </Card.Header>
            <Card.Content description>
                <p style={{fontSize:"17px"}}> Completed {this.props.order.created_at.substring(0, 10)} <Icon name="checkmark"></Icon></p> 
                <p style={{fontSize:"16px", }}>Items</p>
                <Divider ></Divider>
                {items}
                <Divider ></Divider>
                <Totals total={ot} />
            </Card.Content>
            </Card> <br></br>
        </div>
        )
    }
}

export default OrderSummary
