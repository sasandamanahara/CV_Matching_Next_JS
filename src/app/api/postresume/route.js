// Import necessary modules and models
import ResumeModel from '../../models/resume';
import ConnectDB from '../../DB/connectDB';
import { NextResponse } from 'next/server';



export async function POST(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
            await postResume(req, res);
            return NextResponse.json({ success: true, message: "Resume Posted Successfully !" });
       
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}

const postResume = async (req, res) => {
    
    try {
        // Extract the data from the request body
        const {
            userJobSeeker,
            name,
            position,
            contactInformation,
            email,
            address,
            profilePicture,
            socialMedia,
            summary,
            education,
            workExperience,
            projects,
            skills,
            languages,
            certifications
        } = await req.json();

        

        console.log("name,position");
        console.log(name,position);


        const creatingResume=await ResumeModel.create({ 
            userJobSeeker,
            name,
            position,
            contactInformation,
            email,
            address,
            profilePicture,
            socialMedia,
            summary,
            education,
            workExperience,
            projects,
            skills,
            languages,
            certifications});

        // Save the new resume document
        // await newResume.save();

        // Send success response
        return NextResponse.json({ success: true, message: "Resume Posted Successfully !", creatingResume });
    } catch (error) {
        console.error('Error saving resume:', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login !" }, { status: 400 });
    }
}


