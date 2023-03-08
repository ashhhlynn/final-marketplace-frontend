import React, {Component} from 'react';
import { Card, Divider} from 'semantic-ui-react'
import Product from './Product'
import { connect } from "react-redux";

class ProductContainer extends Component {

    render () {
        const products = this.props.products.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
            <div>
               <img width="1263" height="270"style={{ objectFit: "cover", objectPosition: "0% 50%"}}src="https://cdn.shopify.com/s/files/1/1124/9666/collections/succulents-homepage-image_67aed5c3-86b9-4af3-955f-2c02dd129166.jpg?v=1655490570&width=1920"/>
                <h1 style={{marginLeft:"4%", marginTop: "2%", fontWeight:"normal"}}>shop all</h1>
                <h3 style={{marginLeft:"83%", fontWeight:"normal", marginTop:"-3%"}}>filter by</h3>
                    <br></br><Card.Group itemsPerRow={4} style={{marginLeft:"2%", marginRight:"2%", marginTop: "-2%"}}>
                        {products}
                    </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductContainer)