import UserCompany from '@/app/models/UserCompany';
import ConnectDB from '../../DB/connectDB';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    await ConnectDB();
    const { oldEmail,newEmail, password } = await req.json();

    try {
        const checkUser = await UserCompany.findOne({ email:oldEmail });
        if (!checkUser) return NextResponse.json({ success: false,message: 'Account not found' })

        const isMatch = await compare(password, checkUser.password);
        if (!isMatch) return NextResponse.json({ success: false,message: 'Incorrect Password' })

        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, "e8)Qz+j@L8b>D2~T?fN*UH#J5W}Zx?%G", { expiresIn: '1d' });
        const finalData = {token , UserCompany : checkUser}

        if(finalData){
            await checkUser.set({ email: newEmail });
            const updatedCompany = await checkUser.save(); 
            return NextResponse.json({ success: true, message: "Updated successfully", updatedCompany });
        }else{
            return NextResponse.json({ success: false,message: 'Something Went Wrong' })
        }
        

    } catch (error) {
        console.log('Error in login (server) => ', error);
        return NextResponse.json({ success: false,message: 'Something Went Wrong Please Retry Later !' })
    }
}


