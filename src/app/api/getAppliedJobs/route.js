import ApplyJob from '../../models/ApplyJob';

import ConnectDB from '../../DB/connectDB';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            return await getAppliedJobs(req, res);
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}



const getAppliedJobs =  async (req, res) => {
    await ConnectDB();
    const userId = req.url.split('?')[1].split('=')[1];
    console.log("ID:", userId);

    if(!userId) return NextResponse.json({ success: false, message: "Please Login First"});

    try {
        // console.log("trying  get applied jobs");
        const gettingAppliedJobs  = await ApplyJob.find({userJobSeeker : userId}).populate('userJobSeeker').populate('jobId');
        return NextResponse.json({ success: true, data: gettingAppliedJobs });
    } catch (error) {
        console.log('Error in getting applied  job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login  ! "});
    }
}