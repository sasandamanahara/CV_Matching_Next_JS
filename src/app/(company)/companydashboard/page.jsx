"use client";
import SideBar from "../_components/sidebar";
import CompanyHeader from "../_components/header";
import CardsGrid from "./cardsgrid";
import GraphSection from "./graphsection";
import JobupdatesSection from "./jobupdatessection";
import useSWR from "swr";
import Cookies from "js-cookie";
import { get_all_jobs_of_company } from "../Services/job";
import { useEffect, useState } from "react";
import { InfinitySpin } from 'react-loader-spinner';

export default function DashBoard() {
  let [pendingCount, setPendingCount] = useState(null);
  let [interviewingCount, setInterviewingCount] = useState(null);
  let [offeredCount, setOfferedCount] = useState(null);
  let [appliedCount, setAppliedCount] = useState(null);
  let [allJobsCount, setallJobsCount] = useState(null);
  let [openJobCount, setOpenJobCount] = useState(null);
  let [openJobs, setOpenJobs] = useState(null);

  let [fulltimeCount, setFulltimeCount] = useState(null);
  let [parttimeCount, setParttimeCount] = useState(null);
  let [internshipCount, setInternshipCount] = useState(null);
  let [remoteCount, setRemoteCount] = useState(null);

  let JobsWithFutureDeadline;
  const token = Cookies.get("token");
  const [loading, setLoading] = useState(true);
  // Decode token and get user ID
  let userId = null;
  if (token) {
    const tokenParts = token.split(".");
    if (tokenParts.length === 3) {
      const payload = JSON.parse(atob(tokenParts[1]));
      userId = payload.id;
    } else {
      console.error("Invalid token format");
    }
  } else {
    console.error("Token not found in cookies");
  }

  const { data } = useSWR(`/get-all-jobs-of-company`, () =>
    get_all_jobs_of_company(userId)
  );

  useEffect(() => {
    if (data) {
      let pending = 0;
      let interviewing = 0;
      let offered = 0;

      const uniqueJobIds = new Set();
      data.data1.data.forEach((item) => {
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
          default:
            break;
        }
      });

      let fulltime = 0;
      let parttime = 0;
      let internship = 0;
      let remote = 0;

      data.data1.data.forEach((item) => {
        switch (item.jobId.job_type) {
          case "parttime":
            parttime++;
            break;
          case "fulltime":
            fulltime++;
            break;
          case "internship":
            internship++;
            break;
          case "remote":
            remote++;
            break;
          default:
            break;
        }
      });

      setPendingCount(pending); // Update state with counts
      setInterviewingCount(interviewing);
      setOfferedCount(offered);

      setFulltimeCount(fulltime); // Update state with counts
      setParttimeCount(parttime);
      setInternshipCount(internship);
      setRemoteCount(remote);

      setAppliedCount(data.data1.data.length);
      setallJobsCount(data.data2.data.length);

      const jobs = data.data2.data;
      const currentTime = new Date().getTime(); // Get current time in milliseconds

      // Filter jobs with deadline ahead of now and count them
      JobsWithFutureDeadline = jobs.filter(
        (job) => new Date(job.job_deadline).getTime() > currentTime
      );

      setOpenJobs(JobsWithFutureDeadline);
      setOpenJobCount(JobsWithFutureDeadline.length);
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar />
      </div>
      <div className="flex flex-col">
        <CompanyHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">DashBoard</h1>
          </div>
          <div className="flex-auto items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div>
              {loading ? (
                // Display loading indicator while data is being fetched
                <div><div><InfinitySpin width='200' color="orange" />
                <p className='text-xs uppercase'>Loading...</p></div></div>
              ) : (
                <CardsGrid
                  pendingCount={pendingCount}
                  interviewingCount={interviewingCount}
                  offeredCount={offeredCount}
                />
              )}
            </div>
            <div>
              <span class="flex items-center m-3">
                <span class="pr-6">Job Statistics</span>
                <span class="h-px flex-1 bg-black"></span>
              </span>
              <div>
                {loading ? (
                  // Display loading indicator while data is being fetched
                  <div><div><InfinitySpin width='200' color="orange" />
                <p className='text-xs uppercase'>Loading...</p></div></div>
                ) : (
                  // Pass counts as props to CardsGrid when data fetching is complete
                  <GraphSection
                    appliedCount={appliedCount}
                    allJobsCount={allJobsCount}
                    openJobCount={openJobCount}
                    fulltime={fulltimeCount}
                    parttime={parttimeCount}
                    internship={internshipCount}
                    remote={remoteCount}
                  />
                )}
              </div>
              <br />
            </div>
            <div>
              <span class="flex items-center m-3">
                <span class="pr-6">Open Jobs</span>
                <span class="h-px flex-1 bg-black"></span>
              </span>
              <div>
                {loading ? (
                  // Display loading indicator while data is being fetched
                  <div><div><InfinitySpin width='200' color="orange" />
                <p className='text-xs uppercase'>Loading...</p></div></div>
                ) : (
                  // Pass counts as props to CardsGrid when data fetching is complete
                  <JobupdatesSection  openJobs={openJobs}/>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
