import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import 'typeface-poppins';
import {  Authecontextprovider  } from './context/AuthContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    < Authecontextprovider >
      <App />
    </ Authecontextprovider >
  </React.StrictMode>
);


