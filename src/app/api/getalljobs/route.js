import ConnectDB from '../../DB/connectDB';
import Job from '../../models/Job';
import { NextResponse } from 'next/server';
import UserCompany from '../../models/UserCompany';


export async function GET(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            return await getAllJobs(req, res);
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}


const getAllJobs = async (req, res) => {
    try {
        const gettingjobs = await Job.find({});
        // return res.status(200).json({ success: true, data: gettingjobs })
        return NextResponse.json({ success: true, data: gettingjobs });
    } catch (error) {
        console.log('Error in getting a job (server) => ', error);
        // return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry login  !" })
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login  ! "});
    }
}