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
            return NextResponse.json({ success: true, message: "Successful!" });
       
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

        // Check if a resume already exists for the given userJobSeeker
        const existingResume = await ResumeModel.findOne({ userJobSeeker });

        if (existingResume) {
            // If a resume exists, update the record
            existingResume.set({
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
            });
            await existingResume.save();
            return NextResponse.json({ success: true, message: "Resume Updated Successfully !", existingResume });
        } else {
            // If no resume exists, create a new one
            const creatingResume = await ResumeModel.create({ 
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
            });
            return NextResponse.json({ success: true, message: "Resume Posted Successfully !", creatingResume });
        }
    } catch (error) {
        console.error('Error saving resume:', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login !" }, { status: 400 });
    }
}


