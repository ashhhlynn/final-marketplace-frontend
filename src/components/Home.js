import React, { Component } from "react";
import {  Segment, Header, Divider, Item } from 'semantic-ui-react'

class Home extends Component{

    render() {   
            return (
                <div>
                 <center>
                 <img style={{objectFit: "cover", objectPosition: "0% 50%"}}src="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=2400" alt="House Plants" srcset="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=352 352w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=832 832w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1920 1920w" width="1260" height="300" loading="eager"/>
                 
                 <br></br><br></br><br></br><br></br>
              
                 <Header as="h1" style={{marginLeft:"64%"}}>About</Header>
                 <Item style={{marginLeft:"30%", width:"510px", background:"#FFFFFF", textAlign:"right", fontSize:"16px"}}>
                 <Header>Leaf & Clay is a one-of-a-kind online plant market, offering the widest variety of plant and plant-related products to customers. Our mission is to foster a community of weekend-warrior gardeners, hobbyists, side-hustlers, micro-nursery business owners with high-quality, carefully curated, and affordably priced plants, seeds, flowers, and supplies. 
                 </Header>
                 </Item>
                 </center> 
                 <img style={{marginTop:"-15%", marginLeft:"13%"}}src="https://plantly.io/wp-content/uploads/2023/02/Untitled-design-3-1-380x300.jpg"/>

                 
                 <br></br><br></br><br></br><br></br>
              
                </div>
            )
    }
}
  
export default Home
