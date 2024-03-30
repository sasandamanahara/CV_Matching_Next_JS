'use client';
import { Provider } from 'react-redux';
import { store } from '../Store/store'; // Import your Redux store configuration
import React from 'react';
import Login from './login';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  );
}

export default MyApp;