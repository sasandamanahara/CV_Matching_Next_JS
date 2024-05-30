"use client"; 
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { update_profile } from "../../Services/job";
import {load_profile} from "../../Services/job";
export default function Profile() {

  let userId;

  let [formData, setFormData] = useState({
    profilePicture:"",
    name: "",
    dateOfBirth: 0,
    gender: "",
    phoneNo: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

  const handleLoad = async (event) => {
    console.log("handle load");
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;

    const res = await load_profile(userId);
    if (res.success) {
     
        console.log("load profile");
        console.log(res.profile);
        const { profilePicture, name, dateOfBirth, gender, phoneNo, message } = res.profile;
        console.log(name);
            setFormData({
                profilePicture,
                name,
                dateOfBirth,
                gender,
                phoneNo,
                message
            });
            setLoading(false);
 
    } else {
      // toast.error(res.message);
    }

  };

    useEffect(() => {
      const token = Cookies.get("token");
      const tokenParts = token ? token.split(".") : [];
      const payload = JSON.parse(atob(tokenParts[1]));
      userId = payload.id;

      if (userId) {
        handleLoad();
      }
  }, [])




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);


formData.userJobSeeker = userId;


  
console.log("formData");
console.log(formData);
    const res = await update_profile(formData);
    if (res.success) {
      // toast.success(res.message);
      setTimeout(() => {
        // router.push("/display_jobs");
      }, 1000);
    } else {
      // toast.error(res.message);
    }
  };


  return (
    <div className="grid md:grid-cols-1 max-w-[1240px] m-auto">
      
      <div className="flex flex-col justify-left md:items-start w-full px-2 py-5">
        <h1 className="text-xl text-gray-300 md:flex mb-5">
          GENERAL INFORMATION
        </h1>


        <div>
              {loading ? (
                // Display loading indicator while data is being fetched
                <div>Loading...</div>
              ) : (
                <div>
                   <div className="flex items-center space-x-8 mb-8">
          <div className="flex">
          <img
  src={formData.profilePicture ? formData.profilePicture : "https://static.vecteezy.com/system/resources/previews/016/774/583/non_2x/3d-user-icon-on-transparent-background-free-png.png"}
  className="rounded-full w-32 mr-10 mb-10"
  alt="Avatar"
/>
          </div>
          <div className="flex flex-col justify-items-start">
            <h1 className="text-lg text-gray-700">Add a profile picture</h1>
            <p className="py-2 text-base font-medium text-gray-300">
              Please upload a square image (1:1 aspect ratio).
            </p>

            <p className="py-3 text-xl text-orange-400 hover:text-orange-500 transition duration-300 ease-in-out mb-4 flex items-center">
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
            </p>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              className="profileInput"
              placeholder="Profile Picture"
              onChange={(e) => {
                const file = e.target.files[0];
              
                if (file instanceof Blob) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    setFormData({ ...formData, profilePicture: event.target.result })
                  };
                  reader.readAsDataURL(file);
                } else {
                  console.error("Invalid file type");
                }
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Name
            </label>
            <input
              value={formData.name}
              type="text"
              id="username"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Username"
              maxLength="30"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <p className="py-2 mb-4 text-base text-gray-500">
              This will be displayed as your name.
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
            value={formData.dateOfBirth}
              type="date"
              id="dob"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
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
            value={formData.gender}
              id="gender"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-base font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
            value={formData.phoneNo}
              type="tel"
              id="phone"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Phone Number"
              onChange={(e) =>
                setFormData({ ...formData, phoneNo: e.target.value })
              }
            />
          </div>

         
          <div className="col-span-2">
            <button
              type="button"
              className="w-full inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-base leading-normal uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleSubmit}
            >
              Update my profile
            </button>
          </div>
        </div>
                </div>
              )}
            </div>
            
       
      </div>
    </div>
  );
}
