'use client';
import { Provider } from 'react-redux';
import { store } from '../Store/store'; 
import React from 'react';
import PostedJobs from './PostedJobs';
import SideBar from '../_components/sidebar';
import CompanyHeader from '../_components/header';

function MyApp({ Component, pageProps }) {
  



return (
  <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div className="hidden border-r bg-muted/40 md:block">
      <SideBar/>
    </div>
    <div className="flex flex-col">
      <CompanyHeader/>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Posted Jobs</h1>
        </div>
        <div className="flex-auto items-center justify-center rounded-lg border border-dashed shadow-sm">
          
            
          <Provider store={store}>
          <PostedJobs/>
          </Provider>
         
        </div>
      </main>
    </div>
  </div>

  
);
}

export default MyApp;