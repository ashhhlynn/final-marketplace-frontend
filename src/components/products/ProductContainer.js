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
                <Header style={{marginLeft:"-66%", marginTop: "2%"}}as="h2"><i>Shop All Plants</i></Header>
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