
import {React, Component }from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductContainer from './components/ProductContainer'
import Home from './components/Home'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import Navbar from './components/Navbar'
import ShoppingLinks from './components/ShoppingLinks'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <ShoppingLinks/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<ProductContainer />} />
    <Route path="/cart" element={<ShoppingCartContainer />} />
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
