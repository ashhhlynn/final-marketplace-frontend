import React, { Component } from "react"
import { Item } from 'semantic-ui-react'
import Background from './Background'

class Home extends Component{

    render() {  
        return (
           <div className="home">
                <Background />  
                <center>
                    <Item className="homeHeader" style={{marginBottom: "22%"}}> 
                        <h1><b>A Plant Marketplace</b></h1>
                        <h2><i>give your perfect plant a home</i></h2>
                    </Item>   
                </center>  
            </div>
        )
    }
}

export default Home