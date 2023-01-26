import React, {Component} from 'react';
import CreateProduct from './CreateProduct'
import { Header, Card, Segment } from 'semantic-ui-react'
import Product from './Product'
import { connect } from "react-redux";


class ProductContainer extends Component {

    componentDidMount() {

    }

    render() {
        const products = this.props.products.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
        <div>
               <Segment>
        <Header as='h1' color='teal'><center>Create Product</center></Header>

        <CreateProduct /></Segment>
        <Segment>
        <Header as='h1' color='teal'><center>Shop Products</center></Header>

        <Card.Group>

    
        {products}
        </Card.Group>
        </Segment>
        </div>
            )
        }
    }


    const MSTP = (state) => {
        return {
            products: state.products
        }
      }

export default connect(MSTP)(ProductContainer)