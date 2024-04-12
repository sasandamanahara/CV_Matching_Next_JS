import React from 'react'

export default function notifications() {
  return (
    <div
          className="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 border-r border-gray-200">
              <h1 className="py-3 text-2xl md:text-3xl font-bold ">
                Your Notifications{" "}
              </h1>
              <div className="grid md:grid-cols-2  border-t border-b border-gray-200">
                <div className="flex flex-col  justify-left md:items-start w-full   py-5 ">
                  <p className="text-md ">
                    Notification: General Account Information
                  </p>
                  <p className="pt-2 text-sm text-gray-400">
                    Delivered By:Email{" "}
                  </p>
                </div>
                <div
                  className="justify-right md:items-start w-full px-10  py-6 scale-125

"
                >
                  <FontAwesomeIcon icon={faXmarkCircle} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 ">
                <div className=" flex flex-col justify-left md:items-start w-full py-8">
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300  text-sm rounded-lg pr-10  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  "
                  >
                    <option selected>Live Bot Order Information</option>
                    <option value="a">Bot Info</option>
                    <option value="b">Bot Info</option>
                    <option value="c">Bot Info</option>
                    <option value="d">Bot Info</option>
                  </select>
                </div>
                <div className=" flex flex-col justify-right md:items-start w-full pl-4 py-8 ">
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700   "
                  >
                    <option selected>Delivery Method</option>
                    <option value="a">Email</option>
                    <option value="b">Telegram</option>
                    <option value="c">Twitter</option>
                    <option value="d">Discord</option>
                  </select>
                </div>
              </div>
              <p>Information related on your live bots orders</p>
              <button
                type="button"
                class="my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Save Preferences
              </button>
            </div>

            <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 ">
              <h1 className="py-3 text-2xl md:text-3xl font-bold ">
                Your Delivery Methods{" "}
              </h1>
              <div className="grid md:grid-cols-2  border-t border-b border-gray-200">
                <div className="flex flex-col  justify-left md:items-start w-full   py-5 ">
                  <div class="flex items-center flex-row">
                    <img
                      src={emailLogo}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="w-10 h-8 text-center mr-5"
                      role="img"
                      viewBox="0 0 448 512"
                    ></img>
                    Email
                  </div>
                </div>
                <div className="flex flex-col  justify-right md:items-start w-full   py-5 ">
                  <button
                    type="button"
                    class="text-gray-900 px-10 ml-20 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md  py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Set Up
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2  ">
                <div className="flex flex-col  justify-left md:items-start w-full   py-5 ">
                  <div class="flex items-center flex-row">
                    <img
                      src={telegramLogo}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="w-10 h-8 text-center mr-5"
                      role="img"
                      viewBox="0 0 448 512"
                    ></img>
                    Telegram
                  </div>
                </div>
                <div className="flex flex-col  justify-right md:items-start w-full   py-5 ">
                  <button
                    type="button"
                    class="text-gray-900 px-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md py-2.5 ml-20 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Set Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
