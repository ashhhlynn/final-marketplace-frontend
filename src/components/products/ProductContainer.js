import React, { Component } from 'react'
import { Card, Button, Header } from 'semantic-ui-react'
import Product from './Product'
import { connect } from "react-redux"
import { sortHighPrice } from '../actions/productActions'
import { sortLowPrice } from '../actions/productActions'
import { sortAZ } from '../actions/productActions'
import { sortZA } from '../actions/productActions'

class ProductContainer extends Component {

    sortItems = (event) => {
        console.log(event.target.id)
        if (event.target.id === "1" ) { 
            this.props.sortHighPrice()
        }
        else if (event.target.id === "2" ) { 
            this.props.sortLowPrice()
        }
        else if (event.target.id === "3" ) { 
            this.props.sortAZ()
        }
        else if (event.target.id === "4" ) { 
            this.props.sortZA()
        }
    }

    render () {
        const productGroup = this.props.products.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
            <>
            <div className="productContainer">
                <img src="https://cdn.shopify.com/s/files/1/0019/8361/0978/collections/plants1_2000x.jpg?v=1673559695" alt="succulent"/>
                <Header  floated="right" style={{marginRight:"5%", marginTop:"1.7%"}}>
                    <Button id="1" circular basic onClick={(event)=>{this.sortItems(event)}}>Price High to Low</Button> 
                    <Button id="2" circular basic onClick={(event)=>{this.sortItems(event)}}>Price Low to High</Button>
                    <Button id="3"circular basic onClick={(event)=>{this.sortItems(event)}}>A to Z</Button>
                    <Button id="4"circular basic onClick={(event)=>{this.sortItems(event)}}>Z to A</Button>
                </Header>
                <h1>shop plants </h1> 
            </div>
            <Card.Group itemsPerRow={4}  style={{marginTop: "1%", marginLeft:"2%", marginRight:"2%"}}>
                {productGroup}
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

const mapDispatchToProps = (dispatch) => {
    return {
        sortHighPrice: () => { dispatch(sortHighPrice()) },
        sortLowPrice: () => { dispatch(sortLowPrice()) },
        sortAZ: () => { dispatch(sortAZ()) },
        sortZA: () => { dispatch(sortZA()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)