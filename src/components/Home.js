import React, { Component } from "react";
import {  Segment, Header } from 'semantic-ui-react'

class Home extends Component{

    render() {   
            return (
                <div>
                    <Segment>
                    <center>
                        <img style={{ width:875, height:495 }} src="https://images.squarespace-cdn.com/content/v1/53a20827e4b0c1bc4487322a/1598579515222-MR61YIXMC9SRDE6WDYYI/SIG-100-3.JPG?format=2500w"></img>
                        <br></br><br></br>
                        <Header as="h3" style={{ font: "Courier New"}}> Welcome to Handmade Habitat! </Header>
                        <p>
                        Handmade Habitat is an all natural soy wax candle company for slow, mindful living.<br></br>
                        Shop homemade candles from independent sellers or create your own to sell &hearts;</p>
                        <br></br>
                    </center> 
                    </Segment>
                </div>
            )
    }
}
  
export default Home
