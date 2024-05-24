import ApplyJob from '../../models/ApplyJob';
import ConnectDB from '../../DB/connectDB';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            return await getSpecifiedJobApplicants(req, res);
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}



const getSpecifiedJobApplicants =  async (req, res) => {
    await ConnectDB();
    const id = req.url.split('?')[1].split('=')[1];
    console.log("ID:", id);

    if(!id) return NextResponse.json({ success: false, message: "Please Login First"});

    try {
        console.log("trying");
        const gettingAppliedAllpicants  = await ApplyJob.find({jobId : id}).populate('userJobSeeker').populate('jobId');
        return NextResponse.json({ success: true, data: gettingAppliedAllpicants });
    } catch (error) {
        console.log('Error in getting applied  job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login  ! "});
    }
}