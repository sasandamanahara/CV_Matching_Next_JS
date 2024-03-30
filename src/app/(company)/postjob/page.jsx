'use client';
import { Provider } from 'react-redux';
import { store } from '../Store/store'; // Import your Redux store configuration
import React from 'react';
import PostAJob from './postAJob';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PostAJob/>
    </Provider>
  );
}

export default MyApp;