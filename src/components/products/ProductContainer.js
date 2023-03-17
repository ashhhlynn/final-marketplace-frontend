import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Product from './Product'
import { connect } from "react-redux"

class ProductContainer extends Component {

    render () {
        const products = this.props.products.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
            <>
            <div className="productContainer">
                <img src="https://cdn.shopify.com/s/files/1/0019/8361/0978/collections/plants1_2000x.jpg?v=1673559695" alt="succulent"/>
                <h1>shop plants</h1> 
            </div>
            <Card.Group itemsPerRow={4}  style={{marginTop: "1%", marginLeft:"2%", marginRight:"2%"}}>
                {products}
            </Card.Group>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductContainer)