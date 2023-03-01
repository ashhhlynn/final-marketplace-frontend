import React, { Component } from "react";
import {  Segment, Header, Divider, Item, Card, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';
import Product from './products/Product'

class Home extends Component{

    render() {   
        let p = this.props.products.slice(0,3)
        const products = p.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
            return (
                <div>
                 <center>
                 <img style={{objectFit: "cover", objectPosition: "0% 50%"}}src="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=2400" alt="House Plants" srcset="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=352 352w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=832 832w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1920 1920w" width="1260" height="300" loading="eager"/>
                 
                 <br></br><br></br>
                <Header  style={{fontSize:"38px"}}><i>Life is Sweeter with Plants</i></Header>

                 <Header as="h3">Flat Rate Shipping
                 | Quality Guaranteed
                 
                 | Independent Sellers
                 
                 </Header><br></br>
                 
                 <Button circular style={{width:"300px", fontWeight:"normal"}} size="huge">GET STARTED</Button>
                 <br></br></center><br></br><Divider></Divider>



                 <Header as="h2" style={{marginLeft:"11%"}}><i>Featured Products</i></Header>
                 
              
                 <Card.Group centered> {products} </Card.Group>
                 
                 <Divider></Divider>
                 
                 <br></br>
                       
                       
                       
                       
                        <br></br><br></br><br></br><br></br>
<center>

              
                 <Header as="h2" style={{marginLeft:"62%"}}><i>About</i></Header>
                
                 <Item style={{marginLeft:"27%", width:"510px", textAlign:"right"}}>
                 <Divider></Divider>
                 <Header as="h3">Leaf & Clay is a buy and sell online plant market with a mission to foster a community of weekend-warrior gardeners, hobbyists, side-hustlers, micro-nursery business owners with high-quality, carefully curated, and affordably priced plants and flowers. 
                 </Header>
                 </Item>
                 </center> 
                 <img style={{marginTop:"-19%", marginLeft:"12%"}}src="https://plantly.io/wp-content/uploads/2023/02/Untitled-design-3-1-380x300.jpg"/>

                 
                 <br></br><br></br><br></br><br></br>
              
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return { 
        products: state.products,
    }
}

export default connect(mapStateToProps)(Home)
