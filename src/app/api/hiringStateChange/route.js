
import AppliedJob from '../../models/ApplyJob';
const Joi = require('joi-oid');
import ConnectDB from '../../DB/connectDB';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
                return await changeState(req, res);
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}

const changeState =  async (req, res) => {
    await ConnectDB();
    
    try {
        const { id,value} = await req.json();
            const existingApplication = await AppliedJob.findOne({_id: id });
            console.log(existingApplication);
            if (existingApplication) {
                await existingApplication.set({ status:value });
                await existingApplication.save();
                console.log("ok");
                return NextResponse.json({ success: true, message: "Updated" });
            }else{
                return NextResponse.json({ success: false, message: "Something Went Wrong" }, { status: 400 });
            }
    } catch (error) {

        console.log('error in apply job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login !" }, { status: 400 });
    }

}

