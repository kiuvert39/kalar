import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import 'typeface-poppins';
import {  Authecontextprovider  } from './context/AuthContext';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>

    < Authecontextprovider >
      <App />
    </ Authecontextprovider >
    </PersistGate>
  </Provider>
);


