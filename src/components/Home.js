import React from "react";
import { Item } from 'semantic-ui-react';
import Background from './Background';

const Home = () => {
    return (
        <div className="home">
            <Background />  
            <center>
                <Item className="homeHeader" > 
                    <h1><b>Seedlink</b></h1>
                    <h2><i>A Plant Marketplace</i></h2>
                </Item>   
            </center>  
        </div>
    );
};

export default Home;