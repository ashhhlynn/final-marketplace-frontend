import React, {Component} from 'react';
import { Card, Segment } from 'semantic-ui-react'
import Product from './Product'
import { connect } from "react-redux";
import ShoppingLinks from './ShoppingLinks'
import Navbar from './Navbar'
import { fetchProducts } from './actions/productActions';

class ProductContainer extends Component {

    render () {
        const products = this.props.products.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
            <div>
                <Navbar/>
                <ShoppingLinks/>
                <Segment>
                    <Card.Group>
                        {products}
                    </Card.Group>
                </Segment>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () =>  { dispatch(fetchProducts()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)