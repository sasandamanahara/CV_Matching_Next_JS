"use client"
import SideBar from "../_components/sidebar"
import CompanyHeader from "../_components/header"
//import CardsGrid from "./cardsgrid"
import GraphSection from "./graphsection"
import Recentapplication from "./recentapplication"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { get_my_applied_job  } from "../Services/job";
import { InfinitySpin } from 'react-loader-spinner';

export default function DashBoard() {


  const [totalAppliedJobs, setTotalAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  let [pendingCount, setPendingCount] = useState(null);
  let [interviewingCount, setInterviewingCount] = useState(null);
  let [offeredCount, setOfferedCount] = useState(null);
  let [acceptedCount, setAcceptedCount] = useState(null);
  let [appliedJobs, setAppliedJobs] = useState(null);
  
  useEffect(() => {
    handleLoad();
  }, []); 




  // load backup resume data
  const handleLoad = async (event) => {
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;
    const res = await get_my_applied_job (userId);
    if (res.success) {
      setAppliedJobs(res.data);
      setTotalAppliedJobs(res.data.length);
    
      let pending = 0;
      let interviewing = 0;
      let offered = 0;
      let accepted=0;
      res.data.forEach((item) => {
        // Increment counts based on status
        switch (item.status) {
          case "Pending":
            pending++;
            break;
          case "Interviewing":
            interviewing++;
            break;
          case "Offered":
            offered++;
            break;
          case "Accepted":
            accepted++;
            break;
          default:
            break;
        }
      });
 setInterviewingCount(interviewing)
 setOfferedCount(offered);
 setPendingCount(pending);
 setAcceptedCount(accepted);
      setLoading(false);


    } else {
      // toast.error(res.message);
    }

  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <div className="flex flex-col">
        <CompanyHeader/>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">DashBoard</h1>
          </div>
          <div className="flex-auto items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div>
           
              

            </div>
            <div>
            <span class="flex items-center m-3">
                  <span class="pr-6">Job Statistics</span>
                  <span class="h-px flex-1 bg-black"></span>
                </span>
                <div>
              {loading ? (
                // Display loading indicator while data is being fetched
                <div><InfinitySpin width='200' color="orange" />
                <p className='text-xs uppercase'>Loading...</p></div>
              ) : (
                <GraphSection
                totalAppliedJobs={totalAppliedJobs}
                interviewingCount={interviewingCount}
                offeredCount={offeredCount}
                acceptedCount={acceptedCount}
                pendingCount={pendingCount}
                />
              )}
            </div>
            </div>
             <div >
             <span class="flex items-center m-3">
                  <span class="pr-6">Recent Application History</span>
                  <span class="h-px flex-1 bg-black"></span>
                </span>


                <div>
              {loading ? (
                // Display loading indicator while data is being fetched
                <div><div><InfinitySpin width='200' color="orange" />
                <p className='text-xs uppercase'>Loading...</p></div></div>
              ) : (
                <Recentapplication 
              appliedJobs={appliedJobs}
              />
              )}
            </div>



              
              </div>
              
           
          </div>
        </main>
      </div>
    </div>
  )
}
