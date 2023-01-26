import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import 'semantic-ui-css/semantic.min.css'
import rootReducer from './components/reducers/rootReducer';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';


const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>)


