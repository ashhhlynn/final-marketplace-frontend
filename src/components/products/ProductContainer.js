import React, {Component} from 'react';
import { Card, Segment } from 'semantic-ui-react'
import Product from './Product'
import { connect } from "react-redux";
import Navbar from '../Navbar'

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

export default connect(mapStateToProps)(ProductContainer)