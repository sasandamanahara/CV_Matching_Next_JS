'use client';
import React, { useState, createContext, useEffect } from "react";
import Meta from "./component_jobseeker/meta/Meta";
import Preview from "./component_jobseeker/preview/Preview";
import DefaultResumeData from "./component_jobseeker/utility/DefaultResumeData";
import { usePathname } from "next/navigation";
import { load_resume } from "../../../(jobseeker)/Services/Resume";

const ResumeContext = createContext(DefaultResumeData);

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);



  function extractIdFromUrl(url) {
    // Extract the ID from the URL
    const parts = url.split("/");
    const idIndex = parts.findIndex((part) => part === "applicantprofile") + 1;
    return parts[idIndex];
  }

  const url = usePathname();
  const id = extractIdFromUrl(url);
  console.log(id);

  // load backup resume data
  const handleLoad = async (event) => {

    const res = await load_resume(id);
    if (res.success) {
      setTimeout(() => {
        console.log("load resume");
        console.log(res.resume);
        setResumeData(res.resume);
      }, 1000);
    } else {
      // toast.error(res.message);
    }

  };

  useEffect(() => {
    handleLoad();
  }, []); 

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{resumeData.name} Resume</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            
          <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <Meta
          title="ATSResume | Get hired with an ATS-optimized resume"
          description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems. Say goodbye to frustration and wasted time spent on manual resume formatting. Create your winning resume with ATSResume today and get noticed by employers."
          keywords="ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker"
        />
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          <Preview />
        </div>
      </ResumeContext.Provider>
            
          </div>
        </main>
     
    </>
  );
}
export { ResumeContext };
