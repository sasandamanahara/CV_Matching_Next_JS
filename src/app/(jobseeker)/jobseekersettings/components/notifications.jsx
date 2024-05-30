import React from 'react';

export default function Notifications() {
  return (
    <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
      <div className="grid md:grid-cols-1 max-w-[1240px] m-auto ">
        <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 border-r border-gray-200">
         
          
          <div className="flex flex-col  justify-left md:items-start w-full py-5 ">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Applications
            </label>
            <p className="pt-2 text-sm text-gray-400">Information about your job applications</p>
          </div>

          <div className="flex flex-col  justify-left md:items-start w-full py-5 ">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Jobs
            </label>
            <p className="pt-2 text-sm text-gray-400">Updates and notifications related to job postings</p>
          </div>
          
          <button
            type="button"
            className="my-4 inline-block px-6 py-3 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Save Preferences
          </button>

          
        </div>
      </div>
    </div>
  );
}
