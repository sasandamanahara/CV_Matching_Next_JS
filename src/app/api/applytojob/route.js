
import AppliedJob from '../../models/ApplyJob';
const Joi = require('joi-oid');
import ConnectDB from '../../DB/connectDB';
import { NextResponse } from 'next/server';

const schema = Joi.object({
    message: Joi.string().required(),
    userJobSeeker: Joi.objectId(),
    jobId: Joi.objectId(),
});


export async function POST(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
                return await applyToJob(req, res);
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}

const applyToJob =  async (req, res) => {
    await ConnectDB();


    try {
        const { message, userJobSeeker, jobId} = await req.json();
            const { error } = schema.validate({message , userJobSeeker , jobId});
            if (error) return NextResponse.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

            const existingApplication = await AppliedJob.findOne({ userJobSeeker, jobId });

            if (existingApplication) {
                // If an application already exists, return an error
                return NextResponse.json({ success: false, message: "You have already submitted an application for this job" });
            }

            const newJobApplication = await AppliedJob.create({ message, userJobSeeker, jobId });
            return NextResponse.json({ success: true, message: "Applied Successfully !", newJobApplication });
    } catch (error) {

        console.log('error in apply job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login !" }, { status: 400 });
    }

}

