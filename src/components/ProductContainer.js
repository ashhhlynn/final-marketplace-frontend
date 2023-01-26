import React, {Component} from 'react';
import CreateProduct from './CreateProduct'
import { Header, Card } from 'semantic-ui-react'
import Product from './Product'


class ProductContainer extends Component {
    render() {
        const products = this.props.products.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
        <div>
        <Header as='h1' color='teal'><center>All Products:</center></Header>
        <CreateProduct />
        <Card.Group>
        {products}
        </Card.Group>
        </div>
            )
        }
    }


export default ProductContainer