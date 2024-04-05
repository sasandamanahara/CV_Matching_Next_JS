import ConnectDB from '../../DB/connectDB';
import Job from '../../models/Job';
import Joi from 'joi';
import { NextResponse } from 'next/server';

const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    user: Joi.required(),
    email: Joi.string().email().required(),
    company: Joi.string().required(),
    job_category: Joi.string().required(),
    job_type: Joi.string().required(),
    job_experience: Joi.string().required(),
    job_vacancy: Joi.number().required(),
    job_deadline: Joi.date().required(),
    salary: Joi.number().required(),
});


export async function POST(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
            await postAJob(req, res);
            return NextResponse.json({ success: true, message: "Job Posted Successfully !" });
            break;
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}

const postAJob = async (req, res) => {
    const { user, title, description, salary, company, email, job_category, job_type, job_experience, job_vacancy, job_deadline  } = await req.json();
    const { error } = schema.validate({ user, title, description, salary, company, email, job_category, job_type, job_experience, job_vacancy, job_deadline });
    console.log("post the job");
    if (error) {
        console.log("error");
        return NextResponse.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });
    }
  
    try {
        const creatingJob = await Job.create({ user, title, description, salary, company, email, job_category, job_type, job_experience, job_vacancy, job_deadline });
        console.log("creatingJob");
        console.log(creatingJob);
        return NextResponse.json({ success: true, message: "Job Posted Successfully !", creatingJob });
    } catch (error) {
        console.log('Error in posting a job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login !" }, { status: 400 });
    }
}
