
import {React, Component }from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
 
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
    <div>
          <p>Hi</p></div>
          </BrowserRouter>
    </div>

  );
}



export default App;
