import React  from "react";
import { Segment, Item, Divider } from 'semantic-ui-react'

const About = () => {
        return (
        <div className="about">
            <img style={{marginTop: "19%", marginLeft:"7%", objectFit: "cover", objectPosition: "0% 25%"}}floated="left" width="550px" height="350px" src="https://cdn.shopify.com/s/files/1/1124/9666/files/Sun_7_900x.png?v=1658852737"/>
            <Item style={{marginLeft:"55%", marginTop:"-27%", width:"450px", textAlign:"right"}}>
                <h1>about us</h1>
                <Divider></Divider>
                <h3>
                    Planterina is a buy and sell plant market with a mission to inspire green places by connecting people with plants. We believe a strong relationship with plants will lead to greener and more sustainable lifestyles. Enjoy healthy, happy plants for you and your loved ones delivered straight to your door.
                </h3>
            </Item><br></br><br></br><br></br><br></br>
            
        


            
            </div>
        )
    }

export default About