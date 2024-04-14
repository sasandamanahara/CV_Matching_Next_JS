'use client';
import { Provider } from 'react-redux';
import { store } from '../../(company)/Store/store'; // Import your Redux store configuration
import React from 'react';
import Login from './login';

function Log({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  );
}

export default Log;