import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import React, { useContext, useEffect } from "react";
import { ResumeContext } from "../../../jobseekerprofile/builder";
import { post_resume } from "../../../Services/Resume";
import { load_resume } from "../../../Services/Resume";
import Cookies from 'js-cookie';

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);


  useEffect(() => {
    handleLoad();
  }, []); 


  // load backup resume data
  const handleLoad = async (event) => {
    console.log("handle load");
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;

    const res = await load_resume(userId);
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

  const handleSave = async (data, filename, event) => {
    event.preventDefault();
  
    const token = Cookies.get("token");
    const tokenParts = token ? token.split(".") : [];
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;
  
    // Add userCompany ObjectId to formData
    data.userJobSeeker = userId;
  
    console.log("formData");
    console.log(data);
  
    const res = await post_resume(data); // Send the resume data object directly
    if (res.success) {
      // toast.success(res.message);
      setTimeout(() => {
        console.log("send resume");
        // router.push("/display_jobs");
      }, 1000);
    } else {
      // toast.error(res.message);
    }
  };
  
  return (
    <div className="flex flex-wrap gap-4 mb-2 justify-center">
      <div className="inline-flex flex-row items-center gap-2">
        <h2 className="text-[1.2rem] text-white">Save Data</h2>
        <button
          aria-label="Save Data"
          className="p-2 text-white bg-blue-700 rounded"
          onClick={(event) =>
            handleSave(
              resumeData,
              resumeData.name + " by ATSResume.json",
              event
            )
          }
        >
          <FaCloudDownloadAlt className="text-[1.2rem] text-white" />
        </button>
      </div>
    </div>
  );
};

export default LoadUnload;
