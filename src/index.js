import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar_four from "../src/Navbar/Navbar-4/Navbar_four"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar_four/>
    <App />
  </React.StrictMode>
);
