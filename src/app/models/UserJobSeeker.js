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
    dateOfBirth:String,
    gender:String,
    phoneNo:String,
    message:String,


});

const UserJobSeeker = mongoose.models.UserJobSeeker  || mongoose.model('UserJobSeeker', UserSchema);

export default UserJobSeeker;