import ApplyJob from "../../models/ApplyJob";
import ConnectDB from "../../DB/connectDB";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await ConnectDB();
  const { method } = req;
  switch (method) {
    case "GET":
      return await getAllJobsCompany(req, res);
    default:
      return NextResponse.json({ success: false, message: "Invalid Request" });
  }
}

const getAllJobsCompany = async (req, res) => {
  await ConnectDB();
  const id = req.url.split("?")[1].split("=")[1];
  console.log("ID:", id);

  if (!id)
    return NextResponse.json({ success: false, message: "Please Login First" });

  try {
    console.log("trying");
    try {
        const applyJobs = await ApplyJob.find({}).populate({
            path: 'jobId',
            populate: { path: 'userCompany', select: '_id' }
        });
        const filteredApplyJobs = applyJobs.filter(applyJob => {
            return applyJob.jobId.userCompany._id.toString() === id;
        });
        return NextResponse.json({ success: true, data: filteredApplyJobs });
    } catch (error) {
        console.error('Error occurred:', error);
        return;
    }
  } catch (error) {
    console.log("Error in getting all obs of company (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry login  ! ",
    });
  }
};
