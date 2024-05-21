import ConnectDB from '../../DB/connectDB';
import Job from '../../models/Job';
import { NextResponse } from 'next/server';



export async function GET(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            return await getSpecifiedJob(req, res);
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}


const getSpecifiedJob = async (req, res) => {
    await ConnectDB();
    const id = req.url.split('?')[1].split('=')[1];
    console.log("ID:", id);

    if (!id) return NextResponse.json({ success: false, message: "URL Error" });
    try {
        const gettingjobs = await Job.findById(id).populate('userCompany', 'name email');
        return NextResponse.json({ success: true, data: gettingjobs });
    } catch (error) {
        console.log('Error in getting a specifed Job job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login  ! "});
    }
}