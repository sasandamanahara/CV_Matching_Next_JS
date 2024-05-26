import ResumeModel from "../../models/resume";
import ConnectDB from "../../DB/connectDB";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await ConnectDB();
  const { method } = req;
  switch (method) {
    case "GET":
      const responseData = await getResume(req, res);
      return responseData;
  }
}

const getResume = async (req, res) => {
  try {
    const urlParts = req.url.split("=");
    const id = urlParts[1];
    console.log(id);
    if (!id) {
      console.log("no id");
      return NextResponse.json(
        { success: false, message: "Please Login" },
        { status: 400 }
      );
    }
    const resume = await ResumeModel.findOne({ userJobSeeker: id });
    if (resume) {
      console.log(resume);
      return NextResponse.json({
        success: true,
        message: "Resume found",
        resume,
      });
    } else {
      console.log("not found");
      return NextResponse.json(
        { success: false, message: "Resume not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching resume:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong while fetching resume" },
      { status: 500 }
    );
  }
};
