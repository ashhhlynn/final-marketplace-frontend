import React, { Component } from "react";
import {   Segment, Icon, Header, Divider, Item, Card, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';
import Product from './products/Product'
import Background from './Background'
import About from './About'
import AboutCard from './AboutCard'

import { Link } from 'react-router-dom'
import {createOrder} from './actions/orderActions'

class Home extends Component{

    handleCreateOrder = () => {
        if (this.props.user.length !== 0 && this.props.currentOrder.length === 0) {
            let userId = this.props.user.id
            this.props.createOrder(userId)
        }
        else if (this.props.user.length === 0){
            alert("Login or register to start ordering!")
        }
      }

    render() {   
        let p = this.props.products.slice(0,4)
        const products = p.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
           <div>
            <Background />
            <center><Item style={{marginTop:"-25%", width:"600px"}}> 
                <h1 style={{color:"WHITE", fontSize:"44px"}}>Create Your Oasis</h1>
                <Link to ="/products"><Button style={{ width:"260px", marginRight:"0%"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                </Link>
            </Item></center>
           <About />
           <AboutCard/>
           
           
       
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        products: state.products,
        user: state.currentUser,
        currentOrder: state.currentOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      createOrder: (userId) => { dispatch(createOrder(userId)) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
