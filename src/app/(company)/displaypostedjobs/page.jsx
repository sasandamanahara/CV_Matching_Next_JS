'use client';
import { Provider } from 'react-redux';
import { store } from '../Store/store'; 
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