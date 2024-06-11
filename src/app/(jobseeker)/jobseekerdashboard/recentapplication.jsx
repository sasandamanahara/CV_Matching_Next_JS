import React from 'react';

export default function RecentApplication(appliedJobs) {
  return (
    <>
     <div className='flex flex-wrap justify-center md:justify-center '>
        
        <div className="w-80 p-4 m-2 bg-orange-200 shadow-lg rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                </div>
            </div>
            {appliedJobs &&  appliedJobs.appliedJobs.map((job, index) => (
          <div key={index}>
  
  <div className="flex items-center justify-between mb-4 space-x-12">
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
                    {job.jobId.job_category}
                </span>
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                {job.jobId.job_type}
                </span>
            </div>
         
            <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-50">
                Date Applied  : {new Date(`${job?.createdAt}`).toLocaleDateString("en-GB")}
            </span>
  
     
          </div>
        ))} 
        </div>
      </div>
      <br/>
      <div className="flex items-center justify-center">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
            View All Applications
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
    </>
   
  )
}
