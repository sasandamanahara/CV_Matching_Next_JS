import React, { useEffect, useState } from 'react';
import { get_specified_job_applicants } from "../Services/job";

export default function Jobupdatessection({ openJobs }) {

  const [applicationsCount, setApplicationsCount] = useState({});

  useEffect(() => {
    // Function to fetch the number of applications for each job
    const fetchApplicationsCount = async () => {
      const counts = {};
      // Iterate through openJobs and fetch application count for each job
      for (const job of openJobs) {
        try {
          const applications = await get_specified_job_applicants(job._id);
          counts[job._id] = applications.data.length;
        } catch (error) {
          console.error(`Error fetching applications for job ${job._id}:`, error);
          // Set count to 0 in case of error
          counts[job._id] = 0;
        }
      }
      // Update the state with the counts
      setApplicationsCount(counts);
    };

    // Fetch applications count when openJobs change
    fetchApplicationsCount();
  }, [openJobs]);

  return (
    <div className='flex flex-wrap justify-center md:justify-center '>
      {openJobs &&  openJobs.map((job, index) => (
        <div key={index} className="w-80 p-4 m-2 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
          <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
            <span class="relative p-2 bg-blue-100 rounded-xl">
                <svg width="25" height="25" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                    <g clip-rule="evenodd" fill-rule="evenodd">
                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0">
                        </path>
                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d">
                        </path>
                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e">
                        </path>
                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a">
                        </path>
                    </g>
                </svg>
            </span>
            <div class="flex flex-col">
                <span class="ml-2 font-bold text-black text-md dark:text-white">
                    {job.userCompany.name}
                </span>
                <span class="ml-2 text-sm text-gray-500 dark:text-white">
                {job.userCompany.email}
                </span>
            </div>
        </div>
        <div class="flex items-center">
            <button class="p-1 border border-gray-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                    </path>
                </svg>
            </button>
            <button class="text-gray-200">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="flex items-center justify-between mb-4 space-x-12">
        <span class="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
            {job.title}
        </span>
        <span class="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
            {job.job_type}
        </span>
    </div>
    <div class="block m-auto">
        <div>
            <span class="inline-block text-sm text-gray-500 dark:text-gray-100">
            Applications: {applicationsCount[job._id] || 0}
            </span>
        </div>
        <div class="w-full h-2 mt-2 bg-gray-200 rounded-full">
            <div class="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full">
            </div>
        </div>
    </div>
    <div class="flex items-center justify-start my-4 space-x-4">
        
    </div>
    <div class="flex -space-x-2">
        
    </div>
    <span class="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-40">
        DUE DATE : {new Date(`${job?.job_deadline}`).toLocaleDateString("en-GB")}
    </span>
   
        </div>
      ))}
    </div>

  );
}
