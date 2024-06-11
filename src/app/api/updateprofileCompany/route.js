import UserCompany from '@/app/models/UserCompany';
import ConnectDB from '../../DB/connectDB';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
            await updateProfile(req, res);
            return NextResponse.json({ success: true, message: "Comapny Profile Updated Successfully !" });
        default:
            return NextResponse.json({ success: false, message: "Invalid Request" });
    }
}



const updateProfile = async (req, res) => {
    
    const { profilePicture, companyPicture,name,website,location, phoneNo,employeeCount,industry,date,benifits,message,instagram,twitter,linkedin, userCompany} = await req.json();
    console.log(website);
    const existingProfile = await UserCompany.findOne({ _id: userCompany });

    console.log("Updating Profile");
    if (!existingProfile) {
        console.log("No Profile");
        return NextResponse.json({ success: false,message: " Comapny Profile cannot Find !"});
    }
  else{
    try {
        await existingProfile.set({ profilePicture, companyPicture,name,website,location, phoneNo,employeeCount,industry,date,benifits,message ,instagram,twitter,linkedin});
        existingProfile.profilePicture=profilePicture;
        existingProfile.companyPicture=companyPicture;
        existingProfile.website=website;
        existingProfile.location=location;
        existingProfile.phoneNo=phoneNo;
        existingProfile.employeeCount=employeeCount;
        existingProfile.industry=industry;
        existingProfile.date=date;
        existingProfile.benifits=benifits;
        existingProfile.message=message;
        existingProfile.instagram=instagram;
        existingProfile.twitter=twitter;
        existingProfile.linkedin=linkedin;
        const updatedComapny = await existingProfile.save(); 
        console.log("updatedComapny");
        console.log(updatedComapny);
        return NextResponse.json({ success: true, message: " Comapny Profile Updated Successfully !", updatedComapny });
    } catch (error) {
        console.log('Error in posting a job (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry login !" }, { status: 400 });
    }
  }
    
}
