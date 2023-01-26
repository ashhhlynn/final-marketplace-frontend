import React, { Component } from "react";
import { fetchProducts } from './actions/productActions'
import { connect } from "react-redux";
import Signup from './Signup'


class Home extends Component{

    componentDidMount () {
        this.props.fetchProducts();
      }        
render() {
    if (this.props.currentUser.length === 0){   
    
        return(
        <div className="hi">
           <p>Hi</p>
           < Signup />
        </div>
    )}
    else {
        return (
          <div className="header">
            <p>Hi {this.props.currentUser}</p></div>
        )
    }
}

}

const mapStateToProps = (state) => {
    return {
     currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () =>  { dispatch(fetchProducts()) }
  }
}

  
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)
