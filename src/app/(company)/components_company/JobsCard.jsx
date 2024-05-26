import React, { useState } from "react";
import { Button } from "react-scroll";
import { useRouter } from "next/navigation";

export default function JobsCard({ job, posted }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    // Perform search action here
    console.log("Search:", search);
  };
  const router = useRouter();
  return (
    
    <a
      href="#"
      className="block rounded-lg p-2 shadow-sm shadow-indigo-100 border my-2 mx-2"
    >
      <div className="border border-orange-500 rounded-md overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover"
        />
      </div>
      <div className="mt-2">
        <dl>
          {/* <div>
                        <dt className="sr-only">Company Name</dt>
                        <dd className="text-sm text-orange-500">{job?.company.name}</dd>
                    </div> */}
          <div>
            {/* <dt className="sr-only">Address</dt> */}
            <dd className="font-medium">{job?.company}</dd>
          </div>
        </dl>
        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Salary</p>
              <p className="font-medium">{job?.salary}$ / month</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Deadline</p>
              <p className="font-medium">
                {new Date(`${job?.job_deadline}`).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Title</p>
              <p className="font-medium">{job?.title}</p>
            </div>
          </div>
          
        </div>
        <br/>
        <div className="mb-4">
            <Button
              onClick={() => router.push(`/allapplicants/${job?._id}`)}
              className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
            >
              View Applicants
            </Button>
          </div>
      </div>
    </a>
  );
}
