import ConnectDB from '../../DB/connectDB';
import Job from '../../models/Job';
import { NextResponse } from 'next/server';


export async function GET(req, res) {
    console.log("doing");
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            return await getPostedJobs(req, res);
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}


const getPostedJobs =  async (req, res) => {
    
    const id = req.url.split('?')[1].split('=')[1];
    console.log("ID:", id);

    if(!id) return NextResponse.json({ success: false, message: "Please Login First"});

    try {
        const gettingjobs = await Job.find({userCompany : id}).populate('userCompany', 'name email');
        return NextResponse.json({ success: true, data: gettingjobs });
    } catch (error) {
        console.log('Error in getting a specifed Job job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login  ! "});
    }
}