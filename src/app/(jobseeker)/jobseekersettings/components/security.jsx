import React from 'react'

export default function security() {
  return (
    <div
          className="tab-pane fade"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto text-gray-500 ">
            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 border-r border-gray-200">
              <p className="py-3 text-md md:text-xl font-bold ">PASSWORD </p>
              <p className="text-sm">Change your password to a new one.</p>
              <button
                type="button"
                class=" my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Change password
              </button>{" "}
            </div>
            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 ">
              <p className="py-3 text-md md:text-xl font-bold ">
                MULTI-FACTOR AUTHENTICATION{" "}
              </p>
              <p className="text-sm">Setup or remove MFA devices.</p>
              <button
                type="button"
                class=" my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Setup or Remove
              </button>{" "}
            </div>
          </div>
        </div>
  )
}
