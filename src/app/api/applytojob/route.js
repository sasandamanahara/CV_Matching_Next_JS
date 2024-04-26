import ConnectDB from '../../DB/connectDB';
import Joi from 'joi';
import AppliedJob from '../../models/ApplyJob';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    about: Joi.string().required(),
    job: Joi.string().required(),
    user: Joi.string().required(),
});

// Define route segment config
export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';

export async function POST(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
            await applyToJob(req, res);
            break;
        default:
            return res.status(400).json({ success: false, message: "Invalid Request" });
    }
}

const applyToJob = async (req, res) => {
    await ConnectDB();

    try {
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error', err);
                throw err;
            }

            const oldPath = files.cv.path;
            const originalFileName = files.cv.name;
            const fileExtension = path.extname(originalFileName);
            const randomString = crypto.randomBytes(6).toString('hex');
            const fileName = `${originalFileName.replace(fileExtension, '')}_${randomString}${fileExtension}`;
            const newPath = path.join(process.cwd(), 'public', 'uploads', fileName);

            // Read the file
            fs.readFile(oldPath, function (err, data) {
                if (err) throw err;
                fs.writeFile(newPath, data, function (err) {
                    if (err) throw err;
                    // Delete the temporary file
                    fs.unlink(oldPath, function (err) {
                        if (err) throw err;
                    });
                });
            });

            const jobApplication = {
                name: fields.name,
                email: fields.email,
                about: fields.about,
                job: fields.job,
                user: fields.user,
                cv: fileName,
            };

            const { name, email, about, job, user } = jobApplication;

            const { error } = schema.validate({ name, email, about, job, user });
            if (error) return res.status(400).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

            // Create a new job application record
            await AppliedJob.create(jobApplication);
            return res.status(200).json({ success: true, message: 'Job application submitted successfully!' });
        });
    } catch (error) {
        console.log('error in apply job (server) => ', error);
        return res.status(500).json({ success: false, message: 'Something went wrong, please retry login!' });
    }
};
