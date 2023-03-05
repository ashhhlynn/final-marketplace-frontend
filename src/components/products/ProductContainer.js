import React, {Component} from 'react';
import { Card, Header } from 'semantic-ui-react'
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
                <Header style={{marginLeft:"-65%", marginTop: "2%"}}as="h1"><i>Shop All Plants</i></Header>
                    <Card.Group centered>
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