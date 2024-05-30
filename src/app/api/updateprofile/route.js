import ConnectDB from '../../DB/connectDB';
import UserJobSeeker from '../../models/UserJobSeeker';
// import Joi from 'joi';
import { NextResponse } from 'next/server';
const Joi = require('joi-oid')


export async function POST(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
            await updateProfile(req, res);
            return NextResponse.json({ success: true, message: "JobSeeker Profile Updated Successfully !" });
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}



const updateProfile = async (req, res) => {
    
    const { profilePicture,name,dateOfBirth,gender,phoneNo,message ,userJobSeeker} = await req.json();
    const existingProfile = await UserJobSeeker.findOne({ _id: userJobSeeker });

    console.log("Updating Profile");
    if (!existingProfile) {
        console.log(userJobSeeker);
        console.log("No Profile");
        return NextResponse.json({ success: false,message: " JobSeeker Profile cannot Find !"});
    }
  else{
    try {
        await existingProfile.set({ profilePicture,name,dateOfBirth,gender,phoneNo });
        const updatedJobSeeker = await existingProfile.save(); 
        console.log("updatingJobSeeker");
        console.log(updatedJobSeeker);
        return NextResponse.json({ success: true, message: " JobSeeker Profile Updated Successfully !", updatedJobSeeker });
    } catch (error) {
        console.log('Error in posting a job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login !" }, { status: 400 });
    }
  }
    
}
