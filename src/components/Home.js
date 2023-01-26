import React, { Component } from "react";
import { fetchProducts } from './actions/productActions'
import { connect } from "react-redux";
import Signup from './Signup'
import Login from './Login'
import {createOrder} from './actions/orderActions'
import { Link } from 'react-router-dom'
import Profile from './Profile'

class Home extends Component{

    componentDidMount () {
        this.props.fetchProducts();
      }        

      
  handlecreateOrder(){
    let t = 0
    let u = this.props.currentUser.id
    this.props.createOrder(t, u)
      }


render() {
  
    
        return(
        <div className="hi">
           <p>Hi</p>
           < Signup />
           < Login />
<Profile />
      
<Link to="/products">
<button class="outline" onClick={()=>{this.handlecreateOrder()}}>
            Start Shopping
</button></Link>

        </div>
    )}
  
    }


const mapStateToProps = (state) => {
    return {
     currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () =>  { dispatch(fetchProducts()) },
      createOrder: (t, u) => { dispatch(createOrder(t, u)) },
  }
}

  
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)
