import React, {Component} from 'react';
import { Divider, Segment, Card, Item, Icon, Table} from 'semantic-ui-react'

class OrderSummary extends Component {

    render () {
        const items = this.props.order.order_items.map((item => 
           <div> 
               <Table compact basic='very' size="small" singleline style={{borderTop: "0px", marginTop:"2%", width:"527px"}}>
               <Table.Body>
           <Table.Row style={{borderTop:"0px"}} >
        <Table.Cell  style={{borderTop:"0"}}>{item.title} <i>by user{item.seller}</i></Table.Cell>
        <Table.Cell style={{borderTop:"0"}} textAlign="right"></Table.Cell>
        <Table.Cell style={{border:"0"}} textAlign="right">${item.price}</Table.Cell>
      </Table.Row>
      </Table.Body>
           </Table>
           </div>
        ))  
        const prices = this.props.order.order_items.map((item => 
            <div> ${item.price} </div>
         ))       
        return (
        <div>
           
           <Card style={{width:"555px"}}>
    <Card.Header style={{background:"#e9f0ec", height:"40px"}}>
          <h3 style={{textAlign:"right", fontWeight:"normal", marginRight:"1%", marginTop:"1.5%"}}> Order #{this.props.order.id}</h3>
         </Card.Header>
          <Card.Content description>
    
   <h4 style={{fontWeight:"normal"}}> Completed {this.props.order.updated_at.slice(6, -14)} <Icon name="checkmark"></Icon></h4> 
   Items<Divider style={{marginTop:"1%", marginBottom:"-1%"}}></Divider>
   {items}<Divider style={{marginTop:"1%", marginBottom:"2%"}}></Divider>
   
  Subtotal<br></br>
  Tax<br></br>
  Shipping<br></br>
  <b>Total</b>

   <Card.Content extra style={{marginTop:"-15%", textAlign:"right"}}>
   ${Math.round((this.props.order.total / 1.1)*100)/100}<br></br>
   ${Math.round((this.props.order.total / 1.1 * .1)*100)/100}
<br></br>
$10<br></br>
   <b>${this.props.order.total}</b>
   </Card.Content>
   </Card.Content>
   
    </Card>




            <br></br>
        </div>
        )
    }
}

export default OrderSummary
