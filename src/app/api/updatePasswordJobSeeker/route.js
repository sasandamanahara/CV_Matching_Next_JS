import ConnectDB from '../../DB/connectDB';
import UserJobSeeker from '../../models/UserJobSeeker';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';

export async function POST(req, res) {
    await ConnectDB();
    const { Email,oldPassword, newPassword } = await req.json();

    try {
        const checkUser = await UserJobSeeker.findOne({ email:Email });
        if (!checkUser) return NextResponse.json({ success: false,message: 'Account not found' })

        const isMatch = await compare(oldPassword, checkUser.password);
        if (!isMatch) return NextResponse.json({ success: false,message: 'Incorrect Password' })

        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, "e8)Qz+j@L8b>D2~T?fN*UH#J5W}Zx?%G", { expiresIn: '1d' });
        const finalData = {token , UserJobSeeker : checkUser}

        if(finalData){
            const hashedPassword = await hash(newPassword, 12)
            await checkUser.set({ password: hashedPassword });
            const updatedJobSeeker = await checkUser.save(); 
            return NextResponse.json({ success: true, message: "Updated successfully", updatedJobSeeker });
        }else{
            return NextResponse.json({ success: false,message: 'Something Went Wrong' })
        }
        

    } catch (error) {
        console.log('Error in login (server) => ', error);
        return NextResponse.json({ success: false,message: 'Something Went Wrong Please Retry Later !' })
    }
}


