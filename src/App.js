
import {React, Component }from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductContainer from './components/products/ProductContainer'
import Home from './components/Home'
import ShoppingCartContainer from './components/cart/ShoppingCartContainer'
import { checkUser } from './components/actions/userActions';
import CreateProduct from './components/products/CreateProduct'
import Checkout from './components/checkout/Checkout'
import Head from './components/Head'
import Navbar from './components/Navbar'
import OtherNavbar from './components/OtherNavbar'
import Profile from './components/user/Profile'
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
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            < Head />
              {this.props.user.length === 0 ? <OtherNavbar /> : <Navbar />}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<ProductContainer />} />
              <Route exact path="/cart" element={<ShoppingCartContainer />} />
              <Route exact path="/createproduct" element={<CreateProduct />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/profile" element={<Profile/>} />
            </Routes>
          </Container>
          </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: () =>  { dispatch(checkUser()) },
    fetchProducts: () =>  { dispatch(fetchProducts()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
