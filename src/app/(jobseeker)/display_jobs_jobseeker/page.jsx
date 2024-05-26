'use client';
import { Provider } from 'react-redux';
import { store } from '../../(company)/Store/store';
import React, { useState } from 'react';
import AllJobs from './PostedJobs';
import SideBar from '../_components/sidebar';
import CompanyHeader from '../_components/header';
import { AiOutlineSearch, AiOutlineFilter } from 'react-icons/ai'; 

function MyApp({ Component, pageProps }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        // Perform search action here
        console.log('Search:', search);
    };

    const handleFilter = () => {
        // Perform filter action here
        console.log('Filter:', filter);
    };

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
                            {/* Search input */}
                            <div className="flex items-center mr-4">
                                <input
                                    type="text"
                                    placeholder="Search by title..."
                                    className="rounded-md border border-gray-300 px-4 py-2 mr-2"
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                                <button
                                    className="bg-orange-500 text-white py-2 px-4 rounded-md"
                                    onClick={handleSearch}
                                >
                                    <AiOutlineSearch />
                                </button>
                            </div>
                            {/* Filter button */}
                            <button
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                                onClick={handleFilter}
                            >
                                <AiOutlineFilter />
                            </button>
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
