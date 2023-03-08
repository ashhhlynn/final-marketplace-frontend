import React, {Component} from 'react';
import { Table, } from 'semantic-ui-react'

class Totals extends Component {

    render() {
        return (
            <div> 
            <Table compact basic='very' singleline style={{fontSize:"16px", marginTop:"-2%", width:"390px"}}>
                <Table.Row>
                    <Table.Cell>Subtotal</Table.Cell>
                    <Table.Cell textAlign="right">${this.props.total.toFixed(2)}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell  style={{borderTop:"0"}}>Tax</Table.Cell>
                    <Table.Cell style={{border:"0"}} textAlign="right">${((this.props.total * .1).toFixed(2))}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell  style={{borderTop:"0"}}>Shipping</Table.Cell>
                    <Table.Cell style={{border:"0"}} textAlign="right">$10.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell  style={{ fontSize:"18px"}}><h3>Total</h3></Table.Cell>
                    <Table.Cell style={{ fontSize:"18px"}} textAlign="right"><h3>${((this.props.total * 1.1 + 10)).toFixed(2)}</h3></Table.Cell>
                </Table.Row>
           </Table>             
            </div>
        )
    }   
}

export default Totals