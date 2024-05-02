import ConnectDB from '../../../DB/connectDB';
import UserCompany from '../../../models/UserCompany';
import Joi from 'joi';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export async function POST(req, res) {
    await ConnectDB();
    const { email, password } = await req.json();
    console.log(email);
    console.log(password);

    
    const { error } = schema.validate({ email, password });

    if (error) return NextResponse.json({ message: error.details[0].message.replace(/['"]+/g, '') }, { status: 401 });

    try {
        const checkUser = await UserCompany.findOne({ email });
        if (!checkUser) return NextResponse.json({ success: false,message: 'Account not found' })

        const isMatch = await compare(password, checkUser.password);
        if (!isMatch) return NextResponse.json({ success: false,message: 'Incorrect Password' })

        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, "e8)Qz+j@L8b>D2~T?fN*UH#J5W}Zx?%G", { expiresIn: '1d' });
        const finalData = {token , UserCompany : checkUser}
        return NextResponse.json({ success: true, message: "Login Successful", finalData });

    } catch (error) {
        console.log('Error in login (server) => ', error);
        return NextResponse.json({ success: false,message: 'Something Went Wrong Please Retry Later !' })
    }
}


