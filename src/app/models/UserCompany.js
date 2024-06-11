import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({




    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
        
    profilePicture:String,
    companyPicture:String,
    website: String,
    location: String,
    phoneNo: String,
    employeeCount: String,
    industry: String,
    date: String,
    benifits: String,
    message: String,
    instagram:String,
    twitter:String,
    linkedin:String,
});

const UserCompany = mongoose.models.UserCompany  || mongoose.model('UserCompany', UserSchema);

export default UserCompany;