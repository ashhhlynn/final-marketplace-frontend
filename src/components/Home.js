import React, { Component } from "react";
import { Item } from 'semantic-ui-react';
import Background from './Background';

class Home extends Component {

    render() {  
        return (
           <div className="home">
                <Background />  
                <center>
                    <Item className="homeHeader" style={{marginBottom: "22%"}}> 
                        <h1><b>Seedlink</b></h1>
                        <h2><i>A Plant Marketplace</i></h2>
                    </Item>   
                </center>  
            </div>
        )
    };
};

export default Home;