import React from 'react'

export default function profile() {
  return (
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
    <div className=" flex flex-col justify-left md:items-start w-full px-2 py-5">
      <h1 className="text-1xl text-gray-300 md:flex mb-5">
        GENERAL INFORMATION
      </h1>
      <div className="flex items-center">
        <div className="flex ">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full w-32 mr-10 mb-10"
            alt="Avatar"
          />
        </div>
        <div className="flex flex-col  justify-items-start">
          <h1 className="text-gray-700">Add a profile picture</h1>
          <p className="py-2 text-sm font-medium text-gray-300">
            Please upload a square image (1:1 aspect ratio).
          </p>

          <a
            href="#!"
            class="py-3 text-xl text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4"
          >
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="pr-2 "
            />
            Upload
          </a>
        </div>
      </div>
      <label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Enter your trader name{" "}
      </label>
      <input
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Username"
        maxlength="30"
      />
      <p className="py-2 mb-10 text-gray-500">
        This will be displayed as your creator name on the Marketplace.
      </p>
      <label
        for="message"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Your message
      </label>
      <input
        type="text"
        id="large-input"
        class="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Tell us a little about yourself..."
        maxlength="500"
      ></input>{" "}
      <p className="py-2 mb-10  text-gray-500">
        This will be displayed as to all users an followers on the
        Marketplace.
      </p>
      <button
        type="button"
        class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Update my profile
      </button>
    </div>
  </div>
  )
}
