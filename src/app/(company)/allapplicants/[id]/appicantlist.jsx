"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { get_specified_job_applicants } from "../../Services/job";
import { hiring_state_change } from "../../Services/job";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import useSWR from "swr";
import CompanyHeader from "../../_components/header";
import { getResume } from "../../Services/applicantService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function extractIdFromUrl(url) {
  const parts = url.split("/");
  const idIndex = parts.findIndex((part) => part === "allapplicants") + 1;
  return parts[idIndex];
}

export default function ApplicantList() {
  const router = useRouter();
  const url = usePathname();
  const id = extractIdFromUrl(url);
  const [JobApplicantsDetails, setJobApplicantsDetails] = useState(null);
  const [details, setDetails] = useState(null);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setloading] = useState(true);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await get_specified_job_applicants(id);
          setDetails(data?.data);
          setloading(false);
        } catch (error) {
          // Handle any errors from the API call
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData(); // Invoke the async function
     
    }, []);
    
    let noRuns=0;

  useEffect(() => {
    if (details) {
      noRuns=noRuns+1;
      try{
        const fetchMatchedScoresForApplicants = async () => {
          const updatedApplicantsDetails = await Promise.all(
            details.map(async (applicant) => {
              const score = await getResume(
                applicant.userJobSeeker._id,
                details[0]?.jobId?.description
              );
              const formattedScore = score !== undefined ? (score).toFixed(2) + "%" : "";
              return { ...applicant, score: formattedScore }; // Return updated applicant object
            })
          );
        
          // Sort the updated applicants array by score in descending order
          updatedApplicantsDetails.sort((a, b) => {
            const scoreA = parseFloat(a.score.replace('%', ''));
            const scoreB = parseFloat(b.score.replace('%', ''));
            return scoreB - scoreA;
          });
        
          // Set the state once with the updated data
          setJobApplicantsDetails(updatedApplicantsDetails);
        };
        fetchMatchedScoresForApplicants();
      }catch(e){
        console.log("rerun");
        console.log(noRuns);
        if(noRuns==1||noRuns==2){
          console.log("rerun");
          fetchMatchedScoresForApplicants();
        }
      }
     
    }
  }, [loading]);

  useEffect(() => {
    if (JobApplicantsDetails) {
      const filtered = JobApplicantsDetails.filter((applicant) =>
        applicant.userJobSeeker.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredApplicants(filtered);
    }
  }, [JobApplicantsDetails, searchQuery]);

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleHiringStageChange = async (id,value) => {
    const res = await hiring_state_change(id,value);
    console.log(res);
    if (res.success) {
      console.log("ok");
      toast.success("Updated");
    } else {
      // toast.error(res.message);
    }
  };


  return (
    <>
      <div className="flex flex-col">
        <CompanyHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">
              All Applicants for{" "}
              {JobApplicantsDetails && JobApplicantsDetails[0]?.jobId?.title}{" "}
              Position
            </h1>
          </div>
          <div className="flex-auto items-left justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex-auto flex-col px-4 py-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h2 className="text-lg font-bold text-orange-400 mb-2 md:mb-0">
                  Total Applicants:{" "}
                  {JobApplicantsDetails && JobApplicantsDetails.length}
                </h2>
                <div className="flex flex-col md:flex-row relative">
  <input
    type="text"
    id="form-subscribe-Filter"
    className="rounded-lg flex-1 appearance-none border border-orange-500 w-full md:w-auto py-2 px-4 pl-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent mb-2 md:mb-0 md:mr-2"
    placeholder="Search Applicants"
    value={searchQuery}
    onChange={handleSearchChange}
  />
  <div className="absolute left-3 top-3 text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </div>
</div>

              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Name
                      </th>
                      <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Message
                      </th>
                      <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Matched Score
                      </th>
                      <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Applied Date
                      </th>
                      <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Hiring Stage
                      </th>
                      <th className="px-3 py-2 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {filteredApplicants.map((applicant) => (
                        <tr key={applicant._id}>
                          <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <a href="" className="block">
                                  <img
                                    alt="profil"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_Icon_User.svg/1024px-Orange_Icon_User.svg.png"
                                    className="object-cover rounded-full h-8 w-8"
                                  />
                                </a>
                              </div>
                              <div className="ml-2">
                                <p className="text-gray-900">
                                  {applicant.userJobSeeker.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                            <p className="text-gray-900">{applicant.message}</p>
                          </td>
                          <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                            <p className="text-gray-900">
                              {applicant.score}
                            </p>
                          </td>
                          <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                            <p className="text-gray-900">
                              {applicant.createdAt.split("T")[0]}
                            </p>
                          </td>
                          <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                            <span className="relative inline-block px-2 py-1 text-xs font-semibold leading-tight text-green-900">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-orange-200 rounded-full opacity-50"
                              ></span>
                              <span className="relative">
                                <select
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-400 focus:ring-opacity-50"
                        defaultValue={applicant.status}
                              onChange={(e) => handleHiringStageChange(applicant._id, e.target.value)}>
                                  <option value="Pending">Pending</option>
                                  <option value="Interviewing">Interviewing</option>
                                  <option value="Offered">Offered</option>
                                  <option value="Accepted">Accepted</option>
                                </select>
                              </span>
                            </span>
                          </td>
                          <td className="px-3 py-2 text-xs bg-white border-b border-gray-200">
                            <a
                              href={`/applicantprofile/${applicant.userJobSeeker._id}`}
                              className="text-orange-600 hover:text-orange-900 flex items-center"
                            >
                              <svg
                                className="w-4 h-4 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7 9V2H3a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V10h-7a1 1 0 01-1-1zm9-5v2a1 1 0 001 1h2l-3.707 3.707a1 1 0 01-1.414 0L10 5H7a1 1 0 001-1V2h6a1 1 0 011 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              See Application
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center px-2 py-2 bg-white">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border rounded-full hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 p-1 text-xs text-orange-500 bg-white border-t border-b hover:bg-gray-100"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 p-1 text-xs text-gray-600 bg-white border-t border-b border-r hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <ToastContainer />
      </div>
    </>
  );
}
