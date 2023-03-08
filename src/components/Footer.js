import React, { Component } from "react";
import {  Segment, Header } from 'semantic-ui-react'

class Footer extends Component{

    render() {   
            return (
                    <Segment size="tiny" style={{ background:"#e9f0ec", height:"80px"}}>
                    <Header as="h5" style={{marginTop:"2%"}}> © 2023 Planterina | Powered by Heroku</Header> 
                    </Segment>
            )
    }
}

export default Footer