import React from "react"
import { Grid } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import CreateProduct from "./CreateProduct"
import { useNavigate } from "react-router-dom"

function CreateProductContainer() {

    const navigate = useNavigate()

    function handleRoute() {
        navigate('/')
    }
    
    return (
        <div >
            <img style={{marginBottom:"1.5%", objectFit: "cover", objectPosition: "0% 50%", width: "1263px", height: "270px"}} src="https://cdn.shopify.com/s/files/1/0019/8361/0978/collections/plants1_2000x.jpg?v=1673559695" alt="succulent"/>
            <br/><br/>
            <Grid columns={2}>
                <Grid.Column style={{}}> 
                    <Segment style={{background:"inherit", marginLeft:"14%", boxShadow:"none", border:"none"}}>         
                        <CreateProduct handleRoute={handleRoute}/>
                    </Segment>
                </Grid.Column> 
                <Grid.Column> 
                    <img style={{marginTop: "0%", marginLeft:"23%", objectFit: "cover", objectPosition: "0% 0%"}} width="370" height="370" src="https://hips.hearstapps.com/hmg-prod/images/pretty-pink-plants-1554757430.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="cpmain"/>
                </Grid.Column> 
            </Grid>
            <br></br><br></br><br></br>
        </div>
    )
}

export default CreateProductContainer