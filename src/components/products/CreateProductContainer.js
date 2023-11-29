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
            <img style={{objectFit: "cover", objectPosition: "50% 12%"}}  src="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=352 352w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=832 832w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1920 1920w" alt="cp" width="1263" height="270" loading="eager"/>          
            <br/><br/><br></br>
            <Grid columns={2}>
                <Grid.Column style={{}}> 
                    <Segment style={{background:"inherit", marginLeft:"16%", boxShadow:"none", border:"none"}}>         
                        <CreateProduct handleRoute={handleRoute}/>
                    </Segment>
                </Grid.Column> 
                <Grid.Column> 
                    <img style={{marginTop: "0%", marginLeft:"23%", objectFit: "cover", objectPosition: "0% 0%"}} width="370" height="370" src="https://hips.hearstapps.com/hmg-prod/images/pretty-pink-plants-1554757430.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="cpmain"/>
                </Grid.Column> 
            </Grid>
            <br></br><br></br>
        </div>
    )
}

export default CreateProductContainer