import React from 'react';

export default function ApplicantList() {
  return (
    <>
      <div className="flex-auto flex-col px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <h2 className="text-lg font-bold text-orange-400 mb-2 md:mb-0">Total Applicants: 19</h2>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              id="form-subscribe-Filter"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full md:w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent mb-2 md:mb-0 md:mr-2"
              placeholder="Search"
            />
            <button
              className="px-4 py-2 text-base font-semibold text-white bg-orange-400 rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-200"
            >
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                  Full Name
                </th>
                <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                  Score
                </th>
                <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                  Job Role
                </th>
                <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                  Applied Date
                </th>
                <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                  Hiring Stage
                </th>
                <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="block">
                        <img alt="profil" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" className="object-cover rounded-full h-8 w-8"/>
                      </a>
                    </div>
                    <div className="ml-2">
                      <p className="text-gray-900">
                        Jean marc
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                  <p className="text-gray-900">
                    0.0
                  </p>
                </td>
                <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                  <p className="text-gray-900">
                    Admin
                  </p>
                </td>
                <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                  <p className="text-gray-900">
                    12/09/2020
                  </p>
                </td>
                <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                  <span className="relative inline-block px-2 py-1 text-xs font-semibold leading-tight text-green-900">
                    <span aria-hidden="true" className="absolute inset-0 bg-orange-200 rounded-full opacity-50"></span>
                    <span className="relative">
                      active
                    </span>
                  </span>
                </td>
                <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                  <a href="#" className="text-orange-600 hover:text-orange-900">
                    See
                  </a>
                </td>
              </tr>
              {/* Additional rows */}
              {/* You can add more rows here */}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center px-2 py-2 bg-white">
          <div className="flex items-center">
            <button
              type="button"
              className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border rounded-full hover:bg-gray-100"
            >
              <svg
                width="9"
                fill="currentColor"
                height="8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
            <button
              type="button"
              className="w-8 h-8 p-1 text-xs text-orange-500 bg-white border-t border-b hover:bg-gray-100"
            >
              1
            </button>
            <button
              type="button"
              className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border hover:bg-gray-100"
            >
              2
            </button>
            <button
              type="button"
              className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border-t border-b hover:bg-gray-100"
            >
              3
            </button>
            <button
              type="button"
              className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border hover:bg-gray-100"
            >
              4
            </button>
            <button
              type="button"
              className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border-t border-b border-r hover:bg-gray-100"
            >
              <svg
                width="9"
                fill="currentColor"
                height="8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
