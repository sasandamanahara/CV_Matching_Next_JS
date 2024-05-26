import ConnectDB from '../../../DB/connectDB';
import UserCompany from '../../../models/UserCompany';
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
    console.log("registering");
    await ConnectDB();

    const { email, password, name } = await req.json();

    const { error } = schema.validate({ email, password, name });


    if (error) return NextResponse.json({ success: false,message: 'Password must be long than 8 characters' })

    try {
        const ifExist = await UserCompany.findOne({ email });
        
        if (ifExist) {
            return NextResponse.json({ success: false,message: 'UserCompany Already Exist' })
        }

        else {
            const hashedPassword = await hash(password, 12)
            const createCompany = await UserCompany.create({ email, name, password: hashedPassword });
            const token = jwt.sign({ id: createCompany._id, email: createCompany.email }, "e8)Qz+j@L8b>D2~T?fN*UH#J5W}Zx?%G", { expiresIn: '1d' });
            const finalData = {token , UserCompany : createCompany}
            return NextResponse.json({ success: true,message: 'Account created successfully', finalData })
        }
    } catch (error) {
        console.log('Error in register (server) => ', error);
        return NextResponse.json({ success: false,message: 'Something Went Wrong Please Retry Later !' })
    }
}

