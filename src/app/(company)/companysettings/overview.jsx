import React from 'react'
import CalendarForm from './calender'

export default function Overview() {
  return (
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
    <div className=" flex flex-col justify-left md:items-start w-full px-2 py-5">
      <h1 className="text-1xl text-gray-300 md:flex mb-5">
        Basic INFORMATION
      </h1>
      <div className="flex items-center">
        <div className="flex ">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-full w-32 mr-10 mb-10"
            alt="Avatar"
          />
        </div>
        <div className="flex flex-col  justify-items-start">
          <h1 className="text-gray-700">Add a company logo</h1>
          <p className="py-2 text-sm font-medium text-gray-300">
            Please upload a square image (1:1 aspect ratio).
          </p>

          <a
            href="#!"
            className="py-3 text-xl text-orange-400 hover:text-orange-500 transition duration-300 ease-in-out mb-4"
          >
            
            Upload
          </a>
        </div>
      </div>
      <label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Company Name{" "}
      </label>
      <input
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Name of the company"
        maxlength="30"
      />


<label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Company Website{" "}
      </label>
      <input
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Company Website"
        maxlength="30"
      />
      <label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Location{" "}
      </label>
      <input
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Location of the company"
        maxlength="30"
      />

<label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Employee{" "}
      </label>
      <input
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder=""
        maxlength="30"
      />

<label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Industry{" "}
      </label>
      <input
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder=""
        maxlength="30"
      />

    <div className='py-2'>
    <CalendarForm />
    </div>
   


      
      <label
        for="text"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Discription
      </label>
      <input
        type="text"
        id="large-input"
        class="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
        placeholder="Tell us a little about your company..."
        maxlength="500"
      ></input>{" "}
      <p className="py-2 mb-10  text-gray-500">
        
      </p>
      <button
        type="button"
        className="mb-2 w-full inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Update profile
      </button>
    </div>
  </div>
  )
}
