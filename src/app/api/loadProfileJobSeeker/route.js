import ConnectDB from "../../DB/connectDB";
import { NextResponse } from "next/server";
import UserJobSeeker from "@/app/models/UserJobSeeker";

export async function GET(req, res) {
  await ConnectDB();
  const { method } = req;
  switch (method) {
    case "GET":
      const responseData = await getProfile(req, res);
      return responseData;
  }
}

const getProfile = async (req, res) => {
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
    const profile = await UserJobSeeker.findOne({ _id: id });
    if (profile) {
      console.log(profile);
      return NextResponse.json({
        success: true,
        message: "Profile found",
        profile,
      });
    } else {
      console.log("not found");
      return NextResponse.json(
        { success: false, message: "profile not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong while fetching profile" },
      { status: 500 }
    );
  }
};
