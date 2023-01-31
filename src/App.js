
import {React, Component }from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductContainer from './components/ProductContainer'
import Home from './components/Home'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import { checkUser } from './components/actions/userActions';
import CreateProduct from './components/CreateProduct'
import './App.css'
import { Container } from 'semantic-ui-react'
import { connect } from "react-redux";

class App extends Component {

  componentDidMount () {
    if (localStorage.token) {
      this.props.checkUser()
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<ProductContainer />} />
              <Route exact path="/cart" element={<ShoppingCartContainer />} />
              <Route exact path="/createproduct" element={<CreateProduct />} />
            </Routes>
          </Container>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: () =>  { dispatch(checkUser()) } 
  }
}

export default connect(null, mapDispatchToProps)(App);
