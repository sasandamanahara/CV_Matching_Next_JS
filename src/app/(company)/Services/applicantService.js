// services/applicantService.js

import { load_resume } from "../../(jobseeker)/Services/Resume";
import Cookies from "js-cookie";

export const getResume = async (applicantId,jobDescription) => {
  const res = await load_resume(applicantId);
  if (res.success) {
    const { profilePicture, ...resumeWithoutPicture } = res.resume;
    const jsonString = JSON.stringify(resumeWithoutPicture);
    return fetchMatchedScore(applicantId,jsonString,jobDescription)
  } else {
    // toast.error(res.message);
    return null;
  }
};

export const fetchMatchedScore = async (applicantId, resume, jobDescription) => {
  try {
    // Assuming you have an endpoint '/calculate-matched-score' on your backend
    const res = await fetch("/match-skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },


      body: JSON.stringify({
        resume: resume,
        jobDescription: jobDescription,
        applicantId: applicantId,
      }),
    });
    const data = await res.json();
    return data.match_percentage;
  } catch (error) {
    console.log(
      `Error fetching matched score for applicant ${applicantId}:`,
      error
    );
    return null;
  }
};
