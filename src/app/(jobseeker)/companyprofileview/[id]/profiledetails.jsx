"use client";
import React from 'react';
import { FaIndustry, FaMapMarkerAlt, FaLink, FaPhone, FaEnvelope, FaUsers, FaBriefcase, FaGift } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { load_profile } from "../../../(company)/Services/job";
import { InfinitySpin } from 'react-loader-spinner';
import { usePathname } from 'next/navigation';

const formDataDetails = () => {


  const [loading, setLoading] = useState(true);

  function extractIdFromUrl(url) {
    const parts = url.split("/");
    
    const idIndex = parts.findIndex((part) => part === "companyprofileview") + 1;
    return parts[idIndex];
  }

  const url = usePathname();
  const id = extractIdFromUrl(url);


  
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
  email:"",
});



  
  const handleLoad = async (event) => {

    const res = await load_profile(id);

    if (res.success) {
      console.log(res.profile);
      const { profilePicture, companyPicture,name,website,location, phoneNo,employeeCount,industry,date,benifits,message,instagram,twitter,linkedin,email } =
        res.profile;
      setFormData({
        profilePicture, companyPicture,name,website,location, phoneNo,employeeCount,industry,date,benifits,message,instagram,twitter,linkedin,email
      });
      setLoading(false);
    } else {
      toast.error(res.message);
    }
  };


  useEffect(() => {
    if (id) {
      handleLoad();
    }
  },[]);
 


  return (
    <div>
       <div>
          {loading ? (
            // Display loading indicator while data is being fetched
            <div><InfinitySpin width='200' color="orange" />
                <p className='text-xs uppercase'>Loading...</p></div>
          ) : (
            <div>
        <div className="formData-details p-4 bg-orange-100 rounded-lg shadow-md w-full max-w-5.6xl">
      <div className="text-center mb-10">
        <img 
          src={formData.profilePicture} 
          alt=""
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-900">{formData.name}</h2>
        <p className="text-gray-700 mt-2">{formData.message}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        
          <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <FaIndustry className="mr-2" /> Company Info
          </h3>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
       
       <img src={formData.companyPicture} alt={''} className="w-200 h-100 object-cover rounded-lg shadow-sm"/>
    
   </div>
   <br/>
          <p className="text-gray-800"><strong>Industry:</strong> {formData.industry}</p>
          <p className="text-gray-800"><strong>Location:</strong> {formData.location}</p>
          <p className="text-gray-800"><strong>Employees:</strong> {formData.employeeCount}</p>
          <p className="text-gray-800"><strong>Website:</strong> <a href={formData.website} className="text-blue-600">{formData.website}</a></p>
        
        
        </div>
        <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <FaGift className="mr-2" /> Benefits
          </h3>
          <ul className="list-disc list-inside text-gray-800">
            {formData.benifits}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <FaPhone className="mr-2" /> Contact
          </h3>
          <p className="text-gray-800"><strong>Phone:</strong> {formData.phoneNo}</p>
          <p className="text-gray-800"><strong>Email:</strong> <a href={`mailto:${formData.email}`} className="text-blue-600">{formData.email}</a></p>
          <p className="text-gray-800"><strong>Instagram:</strong> {formData.instagram}</p>
          <p className="text-gray-800"><strong>Twitter:</strong> {formData.twitter}</p>
          <p className="text-gray-800"><strong>LinkedIn:</strong> {formData.linkedin}</p>
        </div>
      </div>
    </div>
            </div>
          )}
        </div>
    </div>
 
  );
};

export default formDataDetails;
