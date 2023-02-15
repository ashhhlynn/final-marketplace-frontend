
import {React, Component }from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductContainer from './components/ProductContainer'
import Home from './components/Home'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import { checkUser } from './components/actions/userActions';
import CreateProduct from './components/CreateProduct'
import Checkout from './components/Checkout'
import About from './components/About'
import ShoppingLinks from './components/ShoppingLinks'
import Profile from './components/Profile'
import ToggleLogin from './components/ToggleLogin'

import './App.css'
import { Container } from 'semantic-ui-react'
import { connect } from "react-redux";
import { fetchProducts } from './components/actions/productActions';

class App extends Component {

  componentDidMount () {
    if (localStorage.token) {
      this.props.checkUser()
    }
    this.props.fetchProducts();
    fetchProducts()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <ShoppingLinks />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<ProductContainer />} />
              <Route exact path="/cart" element={<ShoppingCartContainer />} />
              <Route exact path="/createproduct" element={<CreateProduct />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/start" element={<ToggleLogin/>} />

            </Routes>
          </Container>
          </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: () =>  { dispatch(checkUser()) },
    fetchProducts: () =>  { dispatch(fetchProducts()) }
  }
}

export default connect(null, mapDispatchToProps)(App);
