import React from 'react';

export default function Profile() {
  return (
    <div className="grid md:grid-cols-1 max-w-[1240px] m-auto">
      <div className="flex flex-col justify-left md:items-start w-full px-2 py-5">
        <h1 className="text-xl text-gray-300 md:flex mb-5">
          GENERAL INFORMATION
        </h1>
        <div className="flex items-center space-x-8 mb-8">
          <div className="flex">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-full w-32 mr-10 mb-10"
              alt="Avatar"
            />
          </div>
          <div className="flex flex-col justify-items-start">
            <h1 className="text-lg text-gray-700">Add a profile picture</h1>
            <p className="py-2 text-base font-medium text-gray-300">
              Please upload a square image (1:1 aspect ratio).
            </p>

            <a
  href="#!"
  className="py-3 text-xl text-orange-400 hover:text-orange-500 transition duration-300 ease-in-out mb-4 flex items-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M2 13h3v5h10v-5h3l-8-8-8 8zm0-10a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 100-2H4V4a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
  Upload
</a>


          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Username"
              maxLength="30"
            />
            <p className="py-2 mb-4 text-base text-gray-500">
              This will be displayed as your creator name on the Marketplace.
            </p>
          </div>
          <div>
            <label
              htmlFor="dob"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="accountType"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Account Type
            </label>
            <select
              id="accountType"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="jobseeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              id="message"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-gray-50 bg-clip-padding rounded-lg border border-solid border-gray-300 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition ease-in-out"
              placeholder="Tell us a little about yourself..."
              maxLength="500"
            />
            <p className="py-2 mb-4 text-base text-gray-500">
              This will be displayed to all users and followers on the Marketplace.
            </p>
          </div>
          <div className="col-span-2">
            <button
              type="button"
              className="w-full inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-base leading-normal uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
            >
              Update my profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
