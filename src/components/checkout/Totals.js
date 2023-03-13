import React, { Component } from 'react' 
import { Table } from 'semantic-ui-react'

class Totals extends Component {

    render() {
        return (
            <div className="totals">
                <Table compact basic='very'>
                    <Table.Body>    
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
                            <Table.Cell  style={{ fontSize:"18px", marginTop: "3%"}}><br/>Total</Table.Cell>
                            <Table.Cell style={{ fontSize:"18px"}} textAlign="right"><br/>${((this.props.total * 1.1 + 10)).toFixed(2)}</Table.Cell>
                        </Table.Row>
                    </Table.Body>   
                </Table>             
            </div>
        )
    }   
}

export default Totals