import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './authContext/authContext';
import { UserContextProvider } from './userContext/userContext';
import { MovieContextProvider } from './Context/movieContext/movieContext';
import { Provider } from "react-redux";
import store from './Redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthContextProvider>
      <UserContextProvider>
        <MovieContextProvider> */}
        <Provider store={store} >
          <App />
        </Provider>  
        {/* </MovieContextProvider>
      </UserContextProvider>
    </AuthContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();