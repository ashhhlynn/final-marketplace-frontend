
import {React, Component }from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductContainer from './components/ProductContainer'
import Home from './components/Home'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import Navbar from './components/Navbar'
import ShoppingLinks from './components/ShoppingLinks'
import { Segment, Card, Header, Container } from 'semantic-ui-react'


function App() {
  return (

    <div className="App">
          <Container>
    <BrowserRouter>
    <Container>
    <Navbar/>
    </Container>
    <ShoppingLinks/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<ProductContainer />} />
    <Route path="/cart" element={<ShoppingCartContainer />} />
    </Routes>
    </BrowserRouter>
    </Container>
    </div>

  );
}

export default App;
