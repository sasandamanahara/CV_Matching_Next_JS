"use client"
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { update_email } from "../../Services/job";

export default function Logindetails() {
  //const [email, setEmail] = useState("example@example.com");
  //const [oldPassword, setOldPassword] = useState("");
  //const [newPassword, setNewPassword] = useState("");
  
  let [formDataEmail, setFormDataEmail] = useState({
    oldEmail:"",
    newEmail:"",
    password:""
  });

  let userId;

  useEffect(() => {
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    userId = payload.id;
  });

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    console.log(formDataEmail);
    formDataEmail.userJobSeeker = userId;
    console.log("formDataEmail");
    console.log(formDataEmail);
    const res = await update_email(formDataEmail);
    if (res.success) {
      toast.success(res.message);
      setTimeout(() => {
        // router.push("/display_jobs");
      }, 1000);
    } else {
      toast.error(res.message);
    }
  };
  
  const handleChangePassword = () => {
    // Logic to change password
  };
  
  return (
    <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
      <div className="grid md:grid-cols-1 max-w-[1240px] m-auto text-gray-500 ">
        <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 border-r border-gray-200">
          <p className="py-3 text-md md:text-xl font-bold ">CHANGE EMAIL </p>
          <p className="text-sm">Update your email address.</p>
          <input
            type="email"
           // value={oldemail}
          //  onChange={(e) => setEmail(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Old Email"
            onChange={(e) =>
              setFormDataEmail({ ...formDataEmail, oldEmail: e.target.value })
            }
          />
          <input
            type="email"
           // value={newemail}
          //  onChange={(e) => setEmail(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none mt-4"
            placeholder="New Email"
            onChange={(e) =>
              setFormDataEmail({ ...formDataEmail, newEmail: e.target.value })
            }
          />
          <input
            type="password"
            //value={Password}
           // onChange={(e) => setOldPassword(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none mt-4"
            placeholder="Password"
            onChange={(e) =>
              setFormDataEmail({ ...formDataEmail, password: e.target.value })
            }
          />
          <button
            type="button"
            //onClick={handleEmailUpdate}
            className="my-4 inline-block px-6 py-3 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleEmailUpdate}
          >
            Update Email
          </button>
        </div>
        <div className="flex flex-col  justify-left md:items-start w-full px-2 py-8 ">
          <p className="py-3 text-md md:text-xl font-bold ">CHANGE PASSWORD </p>
          <p className="text-sm">Change your password to a new one.</p>
          <input
            type="password"
            //value={oldPassword}
           // onChange={(e) => setOldPassword(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Old Password"
          />
          
          <input
            type="password"
            //value={newPassword}
           // onChange={(e) => setNewPassword(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none mt-4"
            placeholder="New Password"
          />
          <button
            type="button"
            //onClick={handleChangePassword}
            className="my-4 inline-block px-6 py-3 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Change Password
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}
