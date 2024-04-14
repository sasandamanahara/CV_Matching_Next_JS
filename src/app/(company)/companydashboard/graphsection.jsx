import React from 'react';
//import PieChartComponent from './piechart';

const MyComponent = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    
                    <div className="sm:hidden mt-4">
                        <label htmlFor="Tab" className="sr-only">Tab</label>
                        <select id="Tab" className="w-full rounded-md border-gray-200">
                            <option>Week</option>
                            <option>Month</option>
                            <option selected>Year</option>
                        </select>
                    </div>
                    <div className="hidden sm:block mt-4">
                        <nav className="flex gap-6" aria-label="Tabs">
                            <a href="#" className="rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">Week</a>
                            <a href="#" className="rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">Month</a>
                            <a href="#" className="rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600" aria-current="page">Year</a>
                        </nav>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <div>
                        <div className="h-32 bg-gray-200 rounded-lg">


                            {/* <PieChartComponent/> */}

                        </div>
                    </div>
                    <div>
                        <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                            <div className="flex items-center">
                                <span className="relative p-4 bg-purple-200 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </span>
                                <p className="ml-2 text-black text-md dark:text-white">Job Views</p>
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">34,500</p>
                                <div className="flex items-center text-sm text-green-500">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                                    </svg>
                                    <span>5.5%</span>
                                    <span className="text-gray-400">This Week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                            <div className="flex items-center">
                                <span className="relative p-4 bg-purple-200 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file">
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    </svg>
                                </span>
                                <p className="ml-2 text-black text-md dark:text-white">Job Applied</p>
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">345</p>
                                <div className="flex items-center text-sm text-green-500">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                                    </svg>
                                    <span>5.5%</span>
                                    <span className="text-gray-400">This Week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 lg:mt-0">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center">
                        <p className="ml-2 text-gray-700 text-md dark:text-gray-50">Open Jobs</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">12</p>
                        <div className="relative h-2 bg-gray-200 rounded w-28">
                            <div className="absolute top-0 left-0 w-2/3 h-2 bg-green-500 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800 dark:text-gray-100">
                        <a href="#" className="block w-full h-full">
                            <div className="w-full">
                                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">Applicants Summary</p>
                                <div className="flex flex-row justify-between">
                                    <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">12</p>
                                    <p className="ml-2 text-gray-700 text-md dark:text-gray-50 py-7">Applicants</p>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <p>Full Time</p>
                                    <p>3/8</p>
                                </div>
                                <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
                                    <div className="w-1/3 h-full text-xs text-center text-white bg-green-400 rounded-full"></div>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <p>Part Time</p>
                                    <p>6/10</p>
                                </div>
                                <div className="w-full h-2 mb-4 bg-indigo-100 rounded-full">
                                    <div className="w-2/3 h-full text-xs text-center text-white bg-indigo-400 rounded-full"></div>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <p>Internships</p>
                                    <p>2/8</p>
                                </div>
                                <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
                                    <div className="w-1/4 h-full text-xs text-center text-white bg-blue-400 rounded-full"></div>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <p>Remote</p>
                                    <p>8/8</p>
                                </div>
                                <div className="w-full h-2 bg-pink-100 rounded-full">
                                    <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
