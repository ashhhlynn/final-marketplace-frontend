
import {React, Component }from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductContainer from './components/ProductContainer'
import Home from './components/Home'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import { checkUser } from './components/actions/userActions';

import CreateProduct from './components/CreateProduct'
import './App.css'
import { Container } from 'semantic-ui-react'
import { fetchProducts } from './components/actions/productActions';
import { connect } from "react-redux";

class App extends Component {

componentDidMount () {
  this.props.fetchProducts();
  this.props.checkUser()
}

render() {
  return (
    <div className="App">
     <Container>
        <BrowserRouter>
        <Container>
        </Container>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/cart" element={<ShoppingCartContainer />} />
        <Route path="/createproduct" element={<CreateProduct />} />

        </Routes>
        </BrowserRouter>
       </Container>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () =>  { dispatch(fetchProducts()) },
    checkUser: () =>  { dispatch(checkUser()) } }

}


export default connect(null, mapDispatchToProps)(App);
