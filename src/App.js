
import {React, Component }from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductContainer from './components/products/ProductContainer'
import Home from './components/Home'
import { checkUser } from './components/actions/userActions';
import CreateProduct from './components/products/CreateProduct'
import UserSoldProducts from './components/user/UserSoldProducts'
import Checkout from './components/checkout/Checkout'
import Navbar from './components/Navbar'
import Profile from './components/user/Profile'
import Footer from './components/Footer'
import './App.css'
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
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<ProductContainer/>} />
              <Route exact path="/createproduct" element={<CreateProduct />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/profile" element={<Profile user={this.props.user}/>} />
              <Route exact path="/userproducts" element={<UserSoldProducts/>} />
            </Routes>
            <Footer />
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
