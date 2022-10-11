import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import NavBar from './componentes/NavBar';
import Banner from './componentes/Banner';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Banner />
      <App />
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
