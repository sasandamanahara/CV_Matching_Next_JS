import React from 'react';

export default function ApplicantList() {
  return (
    <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <div className="flex flex-col max-w-3xl px-2 py-8">
        <div className="flex flex-row justify-between w-auto mb-2 sm:-mx-48  gap-50 ">
          <h2 className="text-xl font-bold text-orange-400 mb-2 ">Total Applicants: 19</h2>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div className="relative">
                            <input
                                type="text"
                                id="form-subscribe-Filter"
                                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent pl-10"
                                placeholder="Search Applicants"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg
                                    className="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3a6 6 0 014.242 10.243l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                </div>
                                </div>

                                <button
                                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-orange-400 rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-200 flex items-center"
                                type="submit"
                                >
                                <svg
                                    className="w-4 h-4 mr-2"
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

                         </form>
                </div>
        </div>
        <div className="px-4 py-4 sm:-mx-60 sm:px-10">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="w-full md:min-w-max leading-normal">
              <thead>
                <tr>
                  <th className="px-14 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    # Full Name
                  </th>
                  <th className="px-12 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Score
                  </th>
                  <th className="px-12 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Job Role
                  </th>
                  <th className="px-12 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Applied Date
                  </th>
                  <th className="px-12 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Hiring Stage
                  </th>
                  <th className="px-12 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        
                                        <div className="flex-shrink-0">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                        </div>
                                   
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        0.0
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Admin
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        12/09/2020
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-orange-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href="#" className="text-orange-600 hover:text-orange-900">
                                    See Application
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="https://th.bing.com/th/id/OIP.kEXBJMLiahYU_7vmOq-4fwHaHa?pid=ImgDet&w=474&h=474&rs=1" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Marcus coco
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        0.0
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Designer
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        01/10/2012
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-orange-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href="#" className="text-orange-600 hover:text-orange-900">
                                    See Application
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="https://th.bing.com/th/id/OIP.Uo81CoJ1d7-M93o3mhGNQwHaHa?rs=1&pid=ImgDetMain" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Ecric marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        0.0
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Developer
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        02/10/2018
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-orange-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href="#" className="text-orange-600 hover:text-orange-900">
                                    See Application
                                </a>

                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="https://th.bing.com/th/id/OIP.Uo81CoJ1d7-M93o3mhGNQwHaHa?rs=1&pid=ImgDetMain" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Julien Huger
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        0.0
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        User
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        23/09/2010
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-orange-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href="#" className="text-orange-600 hover:text-orange-900">
                                    See Application
                                </a>
                                </td>
                            </tr>
                        </tbody>
            </table>
            <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-orange-500 bg-white border-t border-b hover:bg-gray-100"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
