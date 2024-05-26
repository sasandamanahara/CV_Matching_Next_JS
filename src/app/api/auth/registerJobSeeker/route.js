import ConnectDB from '../../../DB/connectDB';
import UserJobSeeker from '../../../models/UserJobSeeker';
import Joi from 'joi';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().required()
});


export async function POST(req, res) {
    await ConnectDB();

    const { email, password, name } = await req.json();

    const { error } = schema.validate({ email, password, name });


    if (error) return NextResponse.json({ success: false,message: 'Password must be long than 8 characters' })

    try {
        const ifExist = await UserJobSeeker.findOne({ email });
        
        if (ifExist) {
            return NextResponse.json({ success: false,message: 'UserJobSeeker Already Exist' })
        }

        else {
            const hashedPassword = await hash(password, 12)
            const createJobSeeker = await UserJobSeeker.create({ email, name, password: hashedPassword });
            const token = jwt.sign({ id: createJobSeeker._id, email: createJobSeeker.email }, "e8)Qz+j@L8b>D2~T?fN*UH#J5W}Zx?%G", { expiresIn: '1d' });
            const finalData = {token , UserJobSeeker : createJobSeeker}
            return NextResponse.json({ success: true,message: 'Account created successfully', finalData })
        }
    } catch (error) {
        console.log('Error in register (server) => ', error);
        return NextResponse.json({ success: false,message: 'Something Went Wrong Please Retry Later !' })
    }
}

