import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider dari react-redux
import App from './App.jsx';
import store from './app/store.js'; 
// import axios from 'axios';//masalah

// axios.defaults.withCredentials=true;//masalah

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
