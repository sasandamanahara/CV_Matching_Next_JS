import React from "react";

const MyComponent = (totalAppliedJobs) => {
  
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="p-4 ml-2 border-2 border-orange-500 shadow-lg rounded-2xl">
              <div className="flex items-center">
                <span className="relative p-4 bg-orange-300 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  </svg>
                </span>
                <p className="ml-2 text-black text-md dark:text-white">
                  Total Jobs Applied
                </p>
              </div>

              <div className="flex flex-col justify-start">
                <span className="ml-16">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/business-management-thick-version/33/jobs-1024.png"
                    alt="Document"
                    className="w-22 h-24"
                  />
                </span>
                <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
                  {totalAppliedJobs.totalAppliedJobs}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="p-4 border-2 border-orange-500 shadow-lg rounded-2xl">
              <div className="flex items-center">
                <span className="relative p-4 bg-orange-300 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,6c1.66,0,3,1.34,3,3s-1.34,3-3,3s-3-1.34-3-3S10.34,6,12,6z M12,19c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,19,12,19z M12,10c1.66,0,3,1.34,3,3s-1.34,3-3,3s-3-1.34-3-3S10.34,10,12,10z M12,7c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,7,12,7z"></path>
                  </svg>
                </span>
                <p className="ml-2 text-black text-md dark:text-white">
                  Interviewed
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <span className="ml-14">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/business-413/256/Business_Interview-01-1024.png"
                    alt="Document"
                    className="w-24 h-27"
                  />
                </span>
                <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
                  {totalAppliedJobs.interviewingCount}
                </p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-0">
        <div className="mt-4">
          <div className="p-4 border-2 border-orange-500 shadow-lg rounded-2xl dark:bg-gray-800 dark:text-gray-100">
            <a href="#" className="block w-full h-full">
              <div className="w-full">
                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                  Job Applied Status
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Accepted Offers</p>
                  <p>
                    {totalAppliedJobs.acceptedCount}/
                    {totalAppliedJobs.offeredCount}
                  </p>
                </div>
                <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{
                      width: `${
                        (totalAppliedJobs.acceptedCount /
                          totalAppliedJobs.offeredCount) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>

             

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Interviewed</p>
                  <p>
                    {totalAppliedJobs.interviewingCount}/
                    {totalAppliedJobs.totalAppliedJobs}
                  </p>
                </div>
                <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{
                      width: `${
                        (totalAppliedJobs.interviewingCount /
                          totalAppliedJobs.totalAppliedJobs) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>


                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Offered</p>
                  <p>
                    {totalAppliedJobs.offeredCount}/
                    {totalAppliedJobs.totalAppliedJobs}
                  </p>
                </div>
                <div className="w-full mb-4 h-2 bg-pink-100 rounded-full">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{
                      width: `${
                        (totalAppliedJobs.offeredCount /
                          totalAppliedJobs.totalAppliedJobs) *
                        100
                      }%`,
                    }}
                  ></div>



                  
                </div>


                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Pending</p>
                  <p>
                    {totalAppliedJobs.pendingCount}/
                    {totalAppliedJobs.totalAppliedJobs}
                  </p>
                </div>
                <div className="w-full h-2 bg-green-100 rounded-full">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{
                      width: `${
                        (totalAppliedJobs.pendingCount /
                          totalAppliedJobs.totalAppliedJobs) *
                        100
                      }%`,
                    }}
                  ></div>
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
