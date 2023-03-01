import React, { Component } from "react";
import {  Segment, Header, Divider } from 'semantic-ui-react'

class Footer extends Component{

    render() {   
            return (
                    <Segment size="tiny" style={{background:"#e9f0ec", height:"80px"}}>
                        <center>
                    <Header as="h5" style={{marginTop:"2%"}}>2023 Leaf & Clay | Powered by Heroku</Header> 
                    </center>
            </Segment>
            )
    }
}
  
export default Footer