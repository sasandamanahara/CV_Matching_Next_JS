"use client";
import React, { useEffect, useState } from "react";
import { get_my_applied_job  } from "../Services/job";
import Cookies from "js-cookie";

export default function Application() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    handleLoad();
  }, []); 


  // load backup resume data
  const handleLoad = async (event) => {
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;
    const res = await get_my_applied_job (userId);
    if (res.success) {
        setAppliedJobs(res.data);
    } else {
      // toast.error(res.message);
    }

  };

  
  return (
    <div className="flex-auto flex-col px-4 py-6">
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-2 md:mb-0">Application History</h2>
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            id="form-subscribe-Filter"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full md:w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent mb-2 md:mb-0 md:mr-2"
            placeholder="Search Applicants"
          />
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-200 flex items-center"
            type="submit"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 9V2H3a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V10h-7a1 1 0 01-1-1zm9-5v2a1 1 0 001 1h2l-3.707 3.707a1 1 0 01-1.414 0L10 5H7a1 1 0 001-1V2h6a1 1 0 011 1z"
                clipRule="evenodd"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            
            <tr className="bg-orange-200">
            <th className="px-4 py-3 text-sm font-semibold text-center text-gray-800 uppercase border-b border-gray-300">
                Role
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-center text-gray-800 uppercase border-b border-gray-300">
                Company Name
              </th>
              
             
              <th className="px-4 py-3 text-sm font-semibold text-center text-gray-800 uppercase border-b border-gray-300">
                Message for Company
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-center text-gray-800 uppercase border-b border-gray-300">
                Applied Date
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-center text-gray-800 uppercase border-b border-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map(job => (
              <tr key={job._id} className="bg-white">
                <td className="px-4 py-3 text-sm text-center text-gray-800 border-b border-gray-300">
                  {job.jobId.title} 
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-800 border-b border-gray-300">
                {job.jobId.company}
                </td>
                
                
                <td className="px-4 py-3 text-sm text-center text-gray-800 border-b border-gray-300">
                  {job.message}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-800 border-b border-gray-300">
                  {job.createdAt.split("T")[0]} 
                </td>
                <td className="px-4 py-3 text-sm text-center text-green-800 border-b border-gray-300">
                  <span className="inline-block px-2 py-1 text-xs font-semibold leading-tight bg-green-200 text-green-800 rounded-full">
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 mr-2 text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v11a1 1 0 01-2 0V4a1 1 0 011-1zm8 3a1 1 0 00-1-1h-3V4a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-xs text-orange-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          1
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-xs text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          2
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-xs text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          3
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-xs text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          4
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 ml-2 text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v11a1 1 0 01-2 0V4a1 1 0 011-1zm8 3a1 1 0 00-1-1h-3V4a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
