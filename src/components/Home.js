import React, { Component } from "react";
import { fetchProducts } from '../actions/productActions'
import { connect } from "react-redux";


class Home extends Component{

componentDidMount () {
    this.props.fetchProducts()
};
        
render(){

    return(
        <div className="hi">
           <p>Hi</p>
        </div>
    )
}

}
const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () => { dispatch(fetchProducts());
    }
  };}
  
  
  export default connect(mapDispatchToProps)(Home)
