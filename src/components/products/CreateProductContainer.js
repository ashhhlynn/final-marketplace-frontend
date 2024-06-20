import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Segment } from 'semantic-ui-react';
import CreateProduct from "./CreateProduct";

function CreateProductContainer() {

    const navigate = useNavigate();

    function handleRoute() {
        navigate('/')
    };
    
    return (
        <div >
            <br/><br/><br></br>
            <Grid columns={2}>
                <Grid.Column> 
                    <Segment style={{background:"inherit", marginLeft:"15%", boxShadow:"none", border:"none"}}>         
                        <CreateProduct handleRoute={handleRoute} />
                    </Segment>
                </Grid.Column> 
                <Grid.Column> 
                    <img style={{marginTop: "0%", marginLeft:"25%", objectFit: "cover", objectPosition: "0% 0%"}} width="370" height="370" src="https://hips.hearstapps.com/hmg-prod/images/pretty-pink-plants-1554757430.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="cpmain"/>
                </Grid.Column> 
            </Grid>
            <br></br><br></br><br></br>
        </div>
    );
};

export default CreateProductContainer;