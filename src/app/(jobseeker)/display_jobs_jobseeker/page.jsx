'use client';
import { Provider } from 'react-redux';
import { store } from '../../(company)/Store/store';
import React, { useState } from 'react';
import AllJobs from './PostedJobs';
import SideBar from '../_components/sidebar';
import CompanyHeader from '../_components/header';
import { AiOutlineSearch, AiOutlineFilter } from 'react-icons/ai'; 

function MyApp({ Component, pageProps }) {
    

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">
            <div className="hidden border-r bg-muted/40 md:block">
                <SideBar/>
            </div>
            <div className="flex flex-col">
                <CompanyHeader/>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-semibold md:text-2xl">All Jobs</h1>
                        <div className="flex items-center">
                           
                          
                        </div>
                    </div>
                    <div className="flex-auto items-center justify-center rounded-lg border border-dashed shadow-sm">
                        <Provider store={store}>
                            <AllJobs/>
                        </Provider>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MyApp;
