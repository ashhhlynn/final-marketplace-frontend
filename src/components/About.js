import React  from "react";
import { Segment, Item, Divider } from 'semantic-ui-react'

const About = () => {
        return (
        <div className="about">
            <img style={{marginTop: "19%", marginLeft:"7%", objectFit: "cover", objectPosition: "0% 0%"}}floated="left" width="550px" height="350px" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F08%2F04%2Fhouseplants-getty-0820.jpg&w=400&h=268&c=sc&poi=%5B709%2C373%5D&q=60"/>
            <Item style={{marginLeft:"55%", marginTop:"-27%", width:"450px", textAlign:"right"}}>
                <h1>about us</h1>
                <Divider></Divider>
                <h3>
                    Planterina is a buy and sell plant market with a mission to inspire green places by connecting people with plants. We believe a strong relationship with plants will lead to greener and more sustainable lifestyles. Enjoy healthy, happy plants for you and your loved ones delivered straight to your door.
                </h3>
            </Item><br></br><br></br><br></br><br></br></div>
        )
    }

export default About