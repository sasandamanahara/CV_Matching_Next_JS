import React from 'react';
//import PieChartComponent from './piechart';

const MyComponent = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
            <div className="lg:col-span-2">
                
                <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <div>
                        <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                            <div className="flex items-center">
                                <span className="relative p-4 bg-purple-200 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </span>
                                <p className="ml-2 text-black text-md dark:text-white">Open Jobs</p>
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">12</p>
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
                                <p className="ml-2 text-black text-md dark:text-white">Applied Candidates</p>
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">345</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center">
                    <span className="relative p-4 bg-purple-200 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </span>
                                <p className="ml-2 text-black text-md dark:text-white">All Jobs</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">20</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="mt-4 lg:mt-0">
                <div className="mt-4">
                    <div className="p-4 bg-white rounded-2xl dark:bg-gray-800 dark:text-gray-100">
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
