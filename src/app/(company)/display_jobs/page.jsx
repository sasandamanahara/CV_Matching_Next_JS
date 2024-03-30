'use client';
import { Provider } from 'react-redux';
import { store } from '../Store/store'; // Import your Redux store configuration
import React from 'react';
import PostedJobs from './PostedJobs';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PostedJobs/>
    </Provider>
  );
}

export default MyApp;