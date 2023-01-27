
import React, { Component } from "react";
import { fetchProducts } from './actions/productActions'
import { connect } from "react-redux";
import Signup from './Signup'
import Login from './Login'
import {createOrder} from './actions/orderActions'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import { Button, Segment, Card, List, Header } from 'semantic-ui-react'
import Greeting from './Greeting'
import ShoppingLinks from './ShoppingLinks'


class Home extends Component{

      
handlecreateOrder(){
    if (this.props.currentOrder.length === 0){
    let u = this.props.currentUser.id
    this.props.createOrder(u)
      }}

render() {
    if (this.props.currentUser.length === 0){       
        return(
        <div className="header">
            < Greeting />
            < ShoppingLinks />
               <Segment>
           < Signup />
           </Segment>
           <Segment>
           < Login />
           </Segment>
           </div>)}
        else {
            return (
                <div className="header">
        <Segment>
        <center>
        <Header color='teal' size='huge'> 

Hi {this.props.currentUser.name}!</Header>
            <Link to="/products">
<Button content="Start Shopping" onClick={()=>{this.handlecreateOrder()}}>
</Button></Link></center><br></br>
            <Profile /></Segment>
</div>)}}}

            
const mapStateToProps = (state) => {
    return {
    currentUser: state.currentUser,
    currentOrder: state.currentOrder
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () =>  { dispatch(fetchProducts()) },
      createOrder: (u) => { dispatch(createOrder(u)) },
  }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(Home)
