// components/ProfileDetails.jsx
import React from 'react';
import { FaIndustry, FaMapMarkerAlt, FaLink, FaPhone, FaEnvelope, FaUsers, FaBriefcase, FaGift } from 'react-icons/fa';

const mockCompany = {
  name: "Tech Innovations Ltd.",
  description: "Nomad is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
  industry: "Technology",
  location: "San Francisco, CA",
  website: "https://techinnovations.com",
  profilePicture: "https://th.bing.com/th/id/R.b6ae5248f97d6fbc86c4868af53eae4e?rik=FTayog6oY12Ikg&pid=ImgRaw&r=0",
  additionalImages: [
    "https://th.bing.com/th/id/OIP.ioQI1NlT-ynIqZPjUzWZlQHaEo?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.ioQI1NlT-ynIqZPjUzWZlQHaEo?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.ioQI1NlT-ynIqZPjUzWZlQHaEo?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.ioQI1NlT-ynIqZPjUzWZlQHaEo?rs=1&pid=ImgDetMain",
  ],
  benefits: [
    "Health Insurance",
    "Paid Time Off",
    "Retirement Savings Plan",
    "Flexible Work Hours",
  ],
  contact: {
    phone: "(123) 456-7890",
    email: "info@techinnovations.com",
  },
  team: [
    {
      name: "Alice Johnson",
      position: "CEO",
      photo: "https://th.bing.com/th/id/R.2fc6ecdf7989040501034d7005f2678d?rik=9YXZ4S4tY%2bm2%2bQ&pid=ImgRaw&r=0",
    },
    {
      name: "Bob Smith",
      position: "CTO",
      photo: "https://th.bing.com/th/id/OIP.pvz2a3dA3AV82LOfu7sqTgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
    },
    {
      name: "Charlie Davis",
      position: "CFO",
      photo: "https://i1.rgstatic.net/ii/profile.image/11431281185365347-1693612089688_Q512/Othmane-Dardari.jpg",
    },
  ],
  founded: "2010",
  employees: "200",
};

const ProfileDetails = () => {
  return (
    <div className="profile-details p-4 bg-orange-100 rounded-lg shadow-md w-full max-w-5.6xl">
      <div className="text-center mb-10">
        <img 
          src={mockCompany.profilePicture} 
          alt="Company Profile" 
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-900">{mockCompany.name}</h2>
        <p className="text-gray-700 mt-2">{mockCompany.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <FaIndustry className="mr-2" /> Company Info
          </h3>
          <p className="text-gray-800"><strong>Industry:</strong> {mockCompany.industry}</p>
          <p className="text-gray-800"><strong>Location:</strong> {mockCompany.location}</p>
          <p className="text-gray-800"><strong>Founded:</strong> {mockCompany.founded}</p>
          <p className="text-gray-800"><strong>Employees:</strong> {mockCompany.employees}</p>
          <p className="text-gray-800"><strong>Website:</strong> <a href={mockCompany.website} className="text-blue-600">{mockCompany.website}</a></p>
          <h4 className="text-xl font-semibold text-gray-900 items-center mt-4">About Company</h4>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {mockCompany.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Company ${index + 1}`} className="w-40 h-30 object-cover rounded-lg shadow-sm"/>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <FaUsers className="mr-2 " /> Team Members
          </h3>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {mockCompany.team.map((member, index) => (
              <div key={index} className="team-member items-center text-center w-1/3">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <p className="text-gray-900 mt-2 font-bold">{member.name}</p>
                <p className="text-gray-700">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <FaGift className="mr-2" /> Benefits
          </h3>
          <ul className="list-disc list-inside text-gray-800">
            {mockCompany.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <FaPhone className="mr-2" /> Contact
          </h3>
          <p className="text-gray-800"><strong>Phone:</strong> {mockCompany.contact.phone}</p>
          <p className="text-gray-800"><strong>Email:</strong> <a href={`mailto:${mockCompany.contact.email}`} className="text-blue-600">{mockCompany.contact.email}</a></p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">

          Profile Settings
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
