import React, {Component} from 'react';
import { Divider, Segment, Card, Item, Icon, Table} from 'semantic-ui-react'

class OrderSummary extends Component {

    render () {
        const items = this.props.order.order_items.map((item => 
           <div> 
               <Table compact basic='very' singleline style={{borderTop: "0px", marginTop:"2%", width:"527px"}}>
               <Table.Body>
           <Table.Row style={{borderTop:"0px", height:"10px"}} >
        <Table.Cell  style={{borderTop:"0", height:"10px"}}>{item.title} <i>by user{item.seller}</i></Table.Cell>
        <Table.Cell style={{borderTop:"0", height:"10px"}} textAlign="right"></Table.Cell>
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
          <center><h3 style={{fontWeight:"normal", marginTop:"1.5%"}}> ORDER #{this.props.order.id}</h3>
          </center></Card.Header>
          <Card.Content description>
    
   <h4 style={{color:"teal"}}> Completed {this.props.order.updated_at.slice(6, -14)} <Icon name="checkmark"></Icon></h4> 
   <b>Items:</b>
   {items}<Divider></Divider>
   
  Subtotal<br></br>
  Tax<br></br>
  Shipping<br></br>
  <b>Total</b>

   <Card.Content extra style={{marginTop:"-16%", textAlign:"right"}}>
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
