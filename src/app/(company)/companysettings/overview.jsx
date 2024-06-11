"use client";
import React, { useEffect, useState } from 'react'
import CalendarForm from './calender'
import Cookies from "js-cookie";
import { update_profile } from "../Services/job";
import { load_profile } from "../Services/job";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InfinitySpin } from 'react-loader-spinner';


export default function Overview() {
  let userId;

  let [formData, setFormData] = useState({
    profilePicture: "",
    companyPicture: "",
    name: "",
    website: "",
    location: "",
    phoneNo: "",
    employeeCount: "",
    industry: "",
    date: "",
    benifits: "",
    message: "",
    instagram:"",
    twitter:"",
    linkedin:"",
  });
  const [loading, setLoading] = useState(true);


  const handleLoad = async (event) => {
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;

    const res = await load_profile(userId);
    if (res.success) {
      console.log(res.profile);
      const { profilePicture, companyPicture,name,website,location, phoneNo,employeeCount,industry,date,benifits,message,instagram,twitter,linkedin } =
        res.profile;
      setFormData({
        profilePicture, companyPicture,name,website,location, phoneNo,employeeCount,industry,date,benifits,message,instagram,twitter,linkedin
      });
      setLoading(false);
    } else {
      toast.error(res.message);
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
  }, []);


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    userId = payload.id;
    formData.userCompany = userId;

    console.log("formData");
    console.log(formData);
    const res = await update_profile(formData);
    if (res.success) {
      toast.success(res.message);
      setTimeout(() => {
        // router.push("/display_jobs");
      }, 1000);
    } else {
      // toast.error(res.message);
    }
  };



  return (
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">

<div className="flex flex-col justify-left md:items-start w-full px-2 py-5">
        <h1 className="text-xl text-gray-300 md:flex mb-5">
          GENERAL INFORMATION
        </h1>

        <div>
          {loading ? (
            // Display loading indicator while data is being fetched
            <div><InfinitySpin width='200' color="orange" />
                <p className='text-xs uppercase'>Loading...</p></div>
          ) : (
            <div>
                 <div className=" flex flex-col justify-left md:items-start w-full px-2 py-5">
      <div className="flex items-center">
        <div className="flex ">
           <img
                    src={
                      formData.profilePicture
                        ? formData.profilePicture
                        : "https://img.freepik.com/premium-vector/company-icon-simple-element-illustration-company-concept-symbol-design-can-be-used-web-mobile_159242-7784.jpg"
                    }
                    className="rounded-full w-32 mr-10 mb-10"
                    alt="Avatar"
                  />
        </div>
        <div className="flex flex-col  justify-items-start">
          <h1 className="text-gray-700">Add a company logo</h1>
          <p className="py-2 text-sm font-medium text-gray-300">
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
                          setFormData({
                            ...formData,
                            profilePicture: event.target.result,
                          });
                        };
                        reader.readAsDataURL(file);
                      } else {
                        console.error("Invalid file type");
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  />
     
        </div>
        
      </div>
      <br/>
      <div className="flex items-center">
        <div className="flex ">
           <img
                    src={
                      formData.companyPicture
                        ? formData.companyPicture
                        : "https://img.freepik.com/premium-vector/company-icon-simple-element-illustration-company-concept-symbol-design-can-be-used-web-mobile_159242-7784.jpg"
                    }
                    className="rounded-full w-32 mr-10 mb-10"
                    alt="Avatar"
                  />
        </div>

        <div className="flex flex-col  justify-items-start">
          <h1 className="text-gray-700">Add a company Image</h1>
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
                          setFormData({
                            ...formData,
                            companyPicture: event.target.result,
                          });
                        };
                        reader.readAsDataURL(file);
                      } else {
                        console.error("Invalid file type");
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  />
     
        </div>
        
      </div>
      <label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Company Name{" "}
      </label>
      <input
      value={formData.name}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Name of the company"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />


<label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Company Website{" "}
      </label>
      <input
      value={formData.website}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Company Website"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, website: e.target.value })
        }
      />
      <label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Location{" "}
      </label>
      <input
      value={formData.location}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Location of the company"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, location: e.target.value })
        }
      />
 <label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Phone No{" "}
      </label>
      <input
      value={formData.phoneNo}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Phone no of Company"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, phoneNo: e.target.value })
        }
      />



<label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Employee Count{" "}
      </label>
      <input
      value={formData.employeeCount}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="No of EMployees in Company"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, employeeCount: e.target.value })
        }
      />

<label
        for="input"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Industry{" "}
      </label>
      <input
      value={formData.industry}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Industry of Company"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, industry: e.target.value })
        }
      />

    <div className='py-2'>
    <CalendarForm />
    </div>
   
    <label
        for="text"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Benifits
      </label>
      <input
      value={formData.benifits}
        type="text"
        id="large-input"
        class="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
        placeholder="Tell us about Company Benifits..."
        maxlength="5000"
        onChange={(e) =>
          setFormData({ ...formData, benifits: e.target.value })
        }
      ></input>{" "}
      <br/>

      
      <label
        for="text"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Description
      </label>
      <input
        value={formData.message}
        type="text"
        id="large-input"
        class="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
        placeholder="Tell us a little about your company..."
        maxlength="10000"
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
      ></input>{" "}

<label
        for="text"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Instagram
      </label>
      <input
      value={formData.instagram}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Instagram URL"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, instagram: e.target.value })
        }
      />
      <label
        for="text"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        Twitter
      </label>
      <input
      value={formData.twitter}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Twitter URL"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, twitter: e.target.value })
        }
      ></input>
  <label
        for="text"
        className="py-2 block mb-2 text-sm font-medium text-gray-700 "
      >
        LinkedIn
      </label>
      <input
      value={formData.linkedin}
        type="text"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="LinkeIn URL"
        maxlength="30"
        onChange={(e) =>
          setFormData({ ...formData, linkedin: e.target.value })
        }
      ></input>
      <br/>
      <button
        type="button"
        className="mb-2 w-full inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleSubmit}
      >
        Update profile
      </button>
      <ToastContainer />
    </div>
             
            </div>
          )}
        </div>
      </div>


 
  </div>
  )
}
