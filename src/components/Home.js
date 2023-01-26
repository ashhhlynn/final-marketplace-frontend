import React, { Component } from "react";
import { fetchProducts } from './actions/productActions'
import { connect } from "react-redux";
import Signup from './Signup'
import Login from './Login'

class Home extends Component{

    componentDidMount () {
        this.props.fetchProducts();
      }        
render() {
  
    
        return(
        <div className="hi">
           <p>Hi</p>
           < Signup />
           < Login />
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
      fetchProducts: () =>  { dispatch(fetchProducts()) }
  }
}

  
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)
