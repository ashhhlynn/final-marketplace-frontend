import React, {Component} from 'react';
import CreateProduct from './CreateProduct'
import { Header } from 'semantic-ui-react'


class ProductContainer extends Component {

    render() {
        return (
<div>    <Header as='h1' color='teal'><center>All Products:</center></Header>

    <CreateProduct />
    </div>
            )
        }

    }


export default ProductContainer